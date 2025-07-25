import * as React from "react";
import Container from "@mui/material/Container";
import "./Todolist.css";
import HeaderApp from "./HeaderApp";
import Content from "./Content";

export default function Todolist() {
  return (
    <Container maxWidth="md">
      <div className="todoapp">
        <HeaderApp />
        <Content />
      </div>
    </Container>
  );
}
