import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
// import { deleteNote } from "../../redux/actions/notesAction";
import { actions } from "../../redux/reducers/noteReducer2";
import { noteSelector } from "../../redux/reducers/noteReducer2";
function NoteList() {
    const dispatch = useDispatch()
    const notes = useSelector(noteSelector)

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>dispatch(actions.delete(index))} className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
