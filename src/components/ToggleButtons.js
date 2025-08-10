import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./ToggleButtons.css";

import Todo from "./Todo";

export default function ToggleButtons() {
  const { todos } = useContext(TodosContext);
  const [displayTodosType, setDisplayTodosType] = useState("all");

  const completedTodos = todos.filter((t) => t.isComplited);
  const inCompletedTodos = todos.filter((t) => !t.isComplited);

  let todosToBeRendered = todos;

  if (displayTodosType === "complete") {
    todosToBeRendered = completedTodos;
  } else if (displayTodosType === "incomplete") {
    todosToBeRendered = inCompletedTodos;
  }

  function changeDisplayedType(event, newValue) {
    if (newValue !== null) {
      setDisplayTodosType(newValue);
    }
  }

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={displayTodosType}
        exclusive
        onChange={changeDisplayedType}
        aria-label="Filter Todos"
        className="btnsGroup"
      >
        <ToggleButton sx={ToggleButtonStyle} value="all">
          All
        </ToggleButton>
        <ToggleButton sx={ToggleButtonStyle} value="complete">
          Complete
        </ToggleButton>
        <ToggleButton sx={ToggleButtonStyle} value="incomplete">
          Incomplete
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Render filtered todos */}
      {todosToBeRendered.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

const ToggleButtonStyle = {
  color: "#ccc",
  border: "none",
  fontWeight: 600,
};
