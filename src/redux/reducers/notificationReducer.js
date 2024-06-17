import {createSlice} from "@reduxjs/toolkit"

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
    extraReducers:{
        // these ER not belong to notifiaction Slice but the other slices
        // reducerName "name"/ActionName ie inside "reducers"
        "todo/add":(state,action)=>{
            console.log("Todo Created")
            state.message = "Todo is created"
        }
    }
})

export const notificationReducer = notiSlice.reducer;
export const action = notiSlice.actions;
export const notificationSelector = (state)=>state.notificationReducer.message;