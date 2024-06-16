// contants

export const ADD_NOTE = "Add Note"
export const DELETE_NOTE = "Delete Note"

// action create

export const addNote = (note)=>({text:note, type:ADD_NOTE})
export const deleteNote = (index)=>({index,type:DELETE_NOTE})