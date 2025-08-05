import "./Content.css";
import Container from "@mui/material/Container";
import ToggleButtons from "./ToggleButtons";
import Todo from "./Todo";
import InputTodo from "./InputTodo";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

const initialTodos = [
  {
    id: uuidv4(),
    title: "Reading Books",
    details: "The Book That Iam Reading Now Is Fosol Fi Osol Al Tafsir",
    isComplited: false,
  },
];

export default function Content() {
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");

  const todosJsx = todos.map((todo) => {
    return <Todo key={todo.id} theTodo={todo} toCheckClick={handleCheckClick}/>;
  });

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "Anything Here..",
      isComplited: false
    }

    setTodos([...todos, newTodo]);
    setTitleInput("");
  }

  function handleInputChnage(e) {
    setTitleInput(e.target.value);
  }

  function handleCheckClick(todoId) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == todoId) {
        todo.isComplited = !todo.isComplited;
        
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  return (
    <Container>
      <div className="content">
        <ToggleButtons />

        {todosJsx}

        <InputTodo
          onAddClick={handleAddClick}
          inputValue={titleInput}
          onInputChange={handleInputChnage}
        />
      </div>
    </Container>
  );
}
