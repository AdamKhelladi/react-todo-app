import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { Check, Delete, Edit } from "@mui/icons-material";

import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function Todo({ todo }) {
  const { todos, setTodos } =
    useContext(TodosContext);

  const baseIconStyle = {
    transition: ".3s",
    "&:hover": { color: "#fff" },
  };

  const checkStyle = {
    ...baseIconStyle,
    color: todo.isComplited ? "#0e76ddff" : "#ccc",
    "&:hover": { color: todo.isComplited ? "#0e76ddff" : "#fff" },
  };

  const editStyle = {
    ...baseIconStyle,
    color: "#ccc",
  };

  const deleteStyle = {
    ...baseIconStyle,
    color: "#ccc",
  };

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isComplited = !t.isComplited;
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: 2,
        bgcolor: "#111e2d",
        maxWidth: 770,
        mx: "auto",
        margin: 0,
        marginBottom: 1,
      }}
    >
      <CardContent style={{ padding: "10px" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={9}>
            <Typography
              variant="h5"
              sx={{
                color: "#ccc",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {todo.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#999", textAlign: "left", fontSize: "18px" }}
            >
              {todo.details}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <IconButton
              aria-label="check"
              sx={checkStyle}
              onClick={() => {
                handleCheckClick();
              }}
            >
              <Check />
            </IconButton>
            <IconButton aria-label="edit" sx={editStyle}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" sx={deleteStyle}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
