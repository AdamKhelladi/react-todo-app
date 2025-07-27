import "./Content.css";
import Container from "@mui/material/Container";
import ToggleButtons from "./ToggleButtons";
import Todo from "./Todo";

export default function Content() {
  return (
    <Container>
      <div className="content">
        <ToggleButtons />
        <Todo />
      </div>
    </Container>
  );
}
