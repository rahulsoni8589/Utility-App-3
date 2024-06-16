import { ADD_NOTE,DELETE_NOTE } from "../actions/notesAction";

const INITIAL_STATE = {
    notes:[
        {text:"This is first note", createdOn: new Date()}, 
        {text:"This is second note", createdOn: new Date()}, 
    ]
}

export const noteReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_NOTE:
            return{
                notes:[...state.notes,{text:action.text,createdOn: new Date()}]
            }
        case DELETE_NOTE:
            state.notes.splice(action.index,1)
            return{
                ...state,
                notes:[...state.notes]
            }
        default:
            return state
    }
}