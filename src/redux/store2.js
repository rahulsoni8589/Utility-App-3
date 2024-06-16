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