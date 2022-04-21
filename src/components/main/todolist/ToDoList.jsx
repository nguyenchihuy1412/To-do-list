import "./todolist.scss";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ToDoForm from "../todoform/ToDoForm";
import ToDoItem from "../todoitem/ToDoItem";
import Navbar from "../navbar/Navbar";

const ToDoList = () => {
  const [login, setLogin] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "Coding",
    },
    {
      id: uuid(),
      title: "Shopping",
    },
    {
      id: uuid(),
      title: "Learn English",
    },
    {
      id: uuid(),
      title: "Exercise",
    },
    {
      id: uuid(),
      title: "Bussiness",
    },
    {
      id: uuid(),
      title: "Take Care Momo",
    },
    {
      id: uuid(),
      title: "Reading Conan",
    },
  ]);

  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: uuid(),
        title,
      },
    ];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <Navbar setLogin={setLogin} login={login} />
      <ToDoForm addTodo={addTodo} login={login} />
      <ul className="list">
        {login === false
          ? "You are logged out, please login to view the list of Todos"
          : todos.map((todo) => {
              return (
                <ToDoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
      </ul>
    </>
  );
};

export default ToDoList;
