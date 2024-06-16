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

export const todoReducer = todoSlice.reducer
export const actions = todoSlice.actions
export const todoSelector = (state)=>state.todoReducer.todos