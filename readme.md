# Implementation of Redux in React App using Redux-tool kit

## creating Slice [Reducer]
- use require for external Library
-  use import for internal libray 
- Eliminated the need of action contants and action create
- data is received using payload object in the action fn/object (inbuilt)
- const notesSlice  = createSlice({
    name:"anyName",
    initialState:defineState,
    reducers:{
        abc: (state,action)=>{

        },
        dgc: (state,action)=>{

        }
    }
})

```javascript
on reducer file

const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

const todoSlice = createSlice({
    name: "todo",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({text:action.payload,completed:false})
        },
        toggle:(state,action)=>{
            state.todos.map((todo,index)=>{
                if(index === action.payload){
                    todo.completed=!todo.completed
                }
                return todo
            })
        }
    }
})

export const todoReducer = todoSlice.reducer //reducer not reducers
export const actions = todoSlice.actions
export const todoSelector = (state)=>state.todoReducer.todos

```
## configure store
- import { configureStore } from "@reduxjs/toolkit";
- const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer
    }
})
```javascript
import {noteReducer} from "./reducers/noteReducer2";
import {todoReducer} from "./reducers/todoReducer2";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer
    }
})

export default store

```
## usage of store [dispatch and selector]:
- useDispatch will be still in use from react-redux library.
- useSelector will be still in use from react-redux library. but its inner cbfn will be in Reducer file as below
- so as create a reuable constant in the Reducer file and export it whereever required.
- export const todoSelector = (state)=>state.ReducerName.list/objectName 
- and then const todos=useSelector(todoSelector);
- By using selector in Reducer file we follow the Principle of DRY (donot repeat youself)

```javascript
on Reducer file
export const todoSelector = (state)=>state.todoReducer.todos;

on components
import { actions } from "../../redux/reducers/noteReducer2";
import { useDispatch } from "react-redux";

const dispatch = useDispatch()
const todos=useSelector(todoSelector);

dispatch(actions.add(Note))

<button onClick={()=>dispatch(actions.toggle(index))} className="btn btn-danger">Change</button>

```

# Implementation of Redux in React App

- import * as redux from "redux"; 
- Above statement means importing everything and giving it name as redux

```javascript
on Action Module

//Action constants
export const ADD_TODO = "Add Todo"
export const TOGGLE_TODO = "Toggle Todo"
// Action creators 
export const addTodo = (text)=>({text, type:ADD_TODO})
export const toggleTodo = (idx)=>({idx, type:TOGGLE_TODO})

on Reducer Module

import {
  toggleTodo,
  TOGGLE_TODO,
  addTodo,
  ADD_TODO,
} from "../actions/actionTodo";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { task: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((task, i) => {
          if (i === action.index) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

on store file

import { todoReducer } from "./reducers/reducerTodo";
import * as redux from "redux"; // it means importing everything and giving it name as redux

const store  = redux.createStore(todoReducer)

export default store

cont.. on next topic = provider

```

## Provider

- provider will allow the share the store to the limited number of components.
- Most of the cases Provider is used in root component ie App.js
- Provide is made specifically for the react and is not available for vanilla js.
- npm i react-redux = provide more fn to redux in react appliation
- [npm i redux] is different from react-redux
-  <Provider store={storeName}>ComponentToGive Access  </Provider>

```javascript
import store from "./components/redux/todostore";
import { Provider } from "react-redux";

return (
    <div>
      <h1>To Do App</h1>
      <Provider store={store}>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
```

## useSelector Hook

- It is a hook provided by the react-redux library
- To use the state where ever required and return the state of the store
- hook can only be used in those component which are the child/enclosed in "provider".
- It uses store.getState() to get the state.
- It is used to avoid direct access to store.
- const todos = useSelector((state)=>state.todos);
    OR = prefered above why
- const todos = store.getState().todos

- Becoz it follows the priciple of abstraction and encapsulation
- abstraction means to hide the something imp or make it not easily accessible to whole application'components

```javascript
import { useSelector } from "react-redux";
  const todos = useSelector((state)=>state.todos);

  in the component
    const todos = useSelector((state)=>state.todos);
```

## Dispatcher

- The useDispatch hook in Redux returns the dispatch function of the Redux store, which can be used to dispatch actions to the reducer function.

- dispatch will update the state and also update the consumers components ie the components which are using the state through selector

- This works on the pattern called as publisher-subscriber pattern.

- use arrow function on onClick event irrespective becoz dispatch always need fn as parameter.
```javascript
on module in which action has to be perfromed

import { useDispatch } from "react-redux";
const dispatch = useDispatch()

dispatch(addTodo(parameter))

<button className="btn btn-warning"
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
```

## combineReducers [redux API]

- To main SRP "single responsibility principle"
- API combineReducers help to combine multiple reducers in the same user
- The combineReducers function is used to combine multiple reducers into a single reducer function. It takes an object with keys representing state slices and values as the reducers that manage those state values.
- combineReducers({
    key(any name):reducer,
    key(any name):reducer
    })
- const state = useSelector((state)=> state.storeKey.reducerState);

```javascript
onn reducer file
const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}
function reducer(state=initialState,action){
    something
}

on store file
import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { combineReducers } from "redux";

const result = combineReducers({
    todosKey:todoReducer,
    notesKey:noteReducer
})
export const store = redux.createStore(result);

usage::
import { useSelector, useDispatch } from "react-redux";
const todos=useSelector((state)=> state.todosKey.todos);
console.log(todos)
const disptach = useDispatch();
```