import {createSlice} from "@reduxjs/toolkit"
import { actions } from "./todoReducer2"

const initialState = {
    message:""
}

const notiSlice = createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{
        remove:(state,action)=>{
            state.message = ""
        }
    },
    // extraReducers:{
    //     // these ER not belong to notifiaction Slice but the other slices
    //     // reducerName "name"/ActionName ie inside "reducers"
    //     "todo/add":(state,action)=>{
    //         console.log("Todo Created")
    //         state.message = "Todo is created"
    //     }
    // }

    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add, (state,action)=>{
    //         state.message = "Todo is created"
    //     })
    // }

    extraReducers:{
        [actions.add]:(state,action)=>{
              state.message = "Todo is created"
        }
    }
})

export const notificationReducer = notiSlice.reducer;
export const action = notiSlice.actions;
export const notificationSelector = (state)=>state.notificationReducer.message;