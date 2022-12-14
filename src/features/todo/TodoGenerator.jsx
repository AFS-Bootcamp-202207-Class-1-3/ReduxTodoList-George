import "./TodoList.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./todoSlice";
function TodoGenerator() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const changeContent = (event) => {
    setText(event.target.value);
  };
  const clickAdd = () => {
    if (text.length !== 0) {
      const todo = {
        context: text,
        done: false,
      };
      dispatch(add(todo));
    }
    setText("");
  };
  return (
    <div>
      <input
        className="input"
        type="text"
        onChange={changeContent}
        value={text}
      ></input>
      <button className="button general-button" onClick={clickAdd}>
        add
      </button>
    </div>
  );
}

export default TodoGenerator;
