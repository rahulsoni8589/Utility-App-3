import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer2";
import "./ToDoForm.css";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { action } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const notiMessage = useSelector(notificationSelector)
  const disptach = useDispatch();

  useEffect(()=>{
    setTimeout(() => {
      disptach(action.remove())
    }, 1500);
  }, [disptach,notiMessage])

  // if(notiMessage){
  //   setTimeout(() => {
  //     disptach(action.remove())
  //   }, 1500);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(actions.add(todoText));
  };

  return (
    <div className="container">
    {notiMessage && <div class="alert alert-success" role="alert">
      {notiMessage}
    </div>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;