"use client";
import { link } from "fs";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: true },
    { todoText: "Todo 3", completed: false },
    { todoText: "Todo 4", completed: true },
    { todoText: "Todo 5", completed: true },
  ]);
  console.log(todos)
  const onClickHandler = (elm: any) => {
    const newTods = todos.map((todo) => {
      if (todo.todoText === elm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTods);
};

    const addTodo = () => {
      const newTodo = { todoText: todo, completed: false };
      const newTodos = [...todos, newTodo ];
      setTodos(newTodos);
      setTodo(" ");
    };
  const deleteTodo = (maraTodo: any) => {
    const newTods = todos.filter((todo) => {
      if (todo.todoText == maraTodo.todoText) return false;
      return true;
    });
    setTodos(newTods);
  };
  return (
    <>
      <h1 style={{ color: "Red" }}>This is My To-Do App</h1>
      <input
        placeholder='Add Todos'
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red",
                fontStyle: "italic",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type='checkbox'
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />

              {elm.todoText}

              <button
                style={{ margin: "30px" }}
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                Deleted
              </button>
            </li>
          );
        })} 
      </ul>
    </>
  );
}
