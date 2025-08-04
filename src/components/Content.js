import "./Content.css";
import Container from "@mui/material/Container";
import ToggleButtons from "./ToggleButtons";
import Todo from "./Todo";
import InputTodo from "./InputTodo";

export default function Content() {
  return (
    <Container>
      <div className="content">
        <ToggleButtons />
        <Todo />
        <Todo />
        <Todo />

        <InputTodo />
      </div>
    </Container>
  );
}
