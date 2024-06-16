import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/notesAction";
function NoteList() {
    const dispatch = useDispatch()
    const notes = useSelector((state)=>state.notesKey.notes)

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>dispatch(deleteNote(index))} className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
