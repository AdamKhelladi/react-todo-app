import "./Content.css";
import Container from "@mui/material/Container";
import ToggleButtons from "./ToggleButtons";
import Todo from "./Todo";
import InputTodo from "./InputTodo";

import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";

const initialTodos = [
  {
    id: uuidv4(),
    title: "Reading Books",
    details: "The Book That Iam Reading Now Is Fosol Fi Osol Al Tafsir",
    isComplited: false
  },
  {
    id: uuidv4(),
    title: "Go To The Gym",
    details: "Go To The Gym Go To The Gym Go To The Gym",
    isComplited: false
  },
  {
    id: uuidv4(),
    title: "Learn Programming",
    details: "Do Some Code, & Tech & business",
    isComplited: false
  },
  {
    id: uuidv4(),
    title: "Visit Family",
    details: "My GrandPa & GrandMa, And Some Friends",
    isComplited: false
  }
]

export default function Content() {
  const [todos, setTodos] = useState(initialTodos);

  const todosJsx = todos.map((todo) => {
    return <Todo key={todo.id} title={todo.title} details={todo.details}/>
  });

  return (
    <Container>
      <div className="content">
        <ToggleButtons />

        {todosJsx}

        <InputTodo />
      </div>
    </Container>
  );
}
