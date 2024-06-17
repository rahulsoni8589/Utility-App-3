import {noteReducer} from "./reducers/noteReducer2";
import { notificationReducer } from "./reducers/notificationReducer";
import {todoReducer} from "./reducers/todoReducer2";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    }
})

export default store