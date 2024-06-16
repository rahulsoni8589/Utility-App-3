const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    notes:[
        {text:"This is first note", createdOn: new Date()}, 
        {text:"This is second note", createdOn: new Date()}, 
    ]
}

const notesSlice  = createSlice({
    name:"notes",
    initialState:initialState,
    reducers:{
        add: (state,action)=>{
            state.notes.push({text:action.payload, createdOn: new Date()})
        },
        delete: (state,action)=>{
            state.notes.splice(action.index,1)
        }
    }
})

export const noteReducer = notesSlice.reducer
export const actions = notesSlice.actions
export const noteSelector = (state)=>state.noteReducer.notes