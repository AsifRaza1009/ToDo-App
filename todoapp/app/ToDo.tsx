"use client";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
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
  console.log(todos);
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
    const newTodos = [...todos, newTodo];
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
    <Box
      bg='green.300'
      border='2px solid red'
      borderRadius='20px'
      w={["300px",'400px','500px']}
      p='5px'
    
    
      textAlign='center'
    >
      <Box textAlign='center'>
        <Heading color='red' fontSize='3xl' p='5'>
          This is My To-Do App
        </Heading>
        <Flex p='5' textAlign='center' direction='column'>
          <Input
            placeholder='Add Todos'
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            maxW='800px'
            margin='auto'
          />
          <Button
            margin='auto'
            mt='4'
            colorScheme='teal'
            w='98px'
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </Flex>

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

                <Button
                  margin='10px'
                  colorScheme='teal'
                  w='70px'
                  onClick={() => {
                    deleteTodo(elm);
                  }}
                >
                  Deleted
                </Button>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
}
