
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { combineReducers } from "redux";

const result = combineReducers({
    todosKey:todoReducer,
    notesKey:noteReducer
})

// combineReducers({
//     key(any name):reducer,
//     key(any name):reducer
// })
export const store = redux.createStore(result);

