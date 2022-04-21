import React, { useState, useRef } from "react";
import "./todoform.scss";

const ToDoForm = ({ addTodo, login }) => {
  const [title, setTitle] = useState("");
  const todoRef = useRef();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
    todoRef.current.focus();
  }



  return (
    <form onSubmit={handleSubmit} >
      <input
        ref={todoRef}
        type="text"
        name="title"
        id="input"
        placeholder="Enter a new to do..."
        value={title}
        style={{display: login === false ? 'none' : 'block'}}
        onChange={handleTitle}
      />
      <input autoFocus type="submit" value="Add To Do" id="submit" />
    </form>
  );
};

export default ToDoForm;
