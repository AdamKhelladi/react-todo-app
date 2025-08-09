import "./Content.css";
import Container from "@mui/material/Container";
import ToggleButtons from "./ToggleButtons";
import Todo from "./Todo";
import InputTodo from "./InputTodo";

import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

import { v4 as uuidv4 } from "uuid";

export default function Content() {
  const { todos, setTodos, titleInput, setTitleInput } =
    useContext(TodosContext);

  const todosJsx = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  function handleAddClick() {
    if (titleInput != "") {
      const newTodo = {
        id: uuidv4(),
        title: titleInput,
        details: "Anything Here..",
        isComplited: false,
      };

      setTodos([...todos, newTodo]);
      setTitleInput("");
    }
  }

  return (
    <Container>
      <div className="content">
        <ToggleButtons />

        {todosJsx}

        <InputTodo onAddClick={handleAddClick} />
      </div>
    </Container>
  );
}
