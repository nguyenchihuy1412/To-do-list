import React, { useState } from "react";
import "./todoitem.scss";

const ToDoItem = ({ todo, deleteTodo, editTodo }) => {
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const editStyle = {
    display: show ? "inline-block" : "none",
  };

  const editInput = () => {
    setShow(!show);
  };

  const handleInput = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEdit = (id) => {
    if (editTitle !== "") {
      editTodo(id, editTitle);
      setShow(false);
    }
  };
  
  return (
    <li>
      {todo.title}
      <span>
        <input
          type="text"
          style={editStyle}
          placeholder="Edit to do..."
          onChange={handleInput}
          value={editTitle}
        />
        <button id="edit" onClick={editInput}>
          Edit
        </button>
        <button id="Save" onClick={handleEdit.bind(this, todo.id)}>
          Save Edit
        </button>
        <button id="delete" onClick={deleteTodo.bind(this, todo.id)}>
          Delete
        </button>
      </span>
    </li>
  );
};

export default ToDoItem;
