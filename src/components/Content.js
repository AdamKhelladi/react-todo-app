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
    return <Todo key={todo.id} title={todo.title} details={todo.details} />;
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
