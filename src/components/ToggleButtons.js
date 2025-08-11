import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useContext, useMemo } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./ToggleButtons.css";

import Todo from "./Todo";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function ToggleButtons() {
  const { todos, setTodos } = useContext(TodosContext);
  const [displayTodosType, setDisplayTodosType] = useState("all");

  const completedTodos = useMemo(() => {
    return todos.filter((t) => t.isComplited);
  }, [todos]);

  const inCompletedTodos = useMemo(() => {
    return todos.filter((t) => !t.isComplited);
  }, [todos]);

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

  // --- centralized dialog state ---
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ title: "", details: "" });

  function handleEditClick(todo) {
    setSelectedTodo(todo);
    setUpdatedTodo({ title: todo.title, details: todo.details });
    setOpenUpdate(true);
  }

  function handleDeleteClick(todo) {
    setSelectedTodo(todo);
    setOpenDelete(true);
  }

  function handleCloseDelete() {
    setOpenDelete(false);
    setSelectedTodo(null);
  }
  function handleCloseUpdate() {
    setOpenUpdate(false);
    setSelectedTodo(null);
  }

  function handleConfirmDelete() {
    const newTodos = todos.filter((t) => t.id !== selectedTodo.id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    handleCloseDelete();
  }

  function handleConfirmUpdate() {
    const updated = todos.map((t) =>
      t.id === selectedTodo.id
        ? { ...t, title: updatedTodo.title, details: updatedTodo.details }
        : t
    );
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
    handleCloseUpdate();
  }

  // ------------------------------------

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

      {todosToBeRendered.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      ))}

      {/* Delete Dialog (central) */}
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        PaperProps={{
          sx: {
            backgroundColor: "#101720",
            color: "white",
            boxShadow: "0 0 7px #666",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle style={{ fontWeight: "600", letterSpacing: "-0.5px" }}>
          Delete this TODO?
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "#cacacaff" }}>
            Are you sure you want to delete "{selectedTodo?.title}"? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Disagree</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* Update Dialog (central) */}
      <Dialog
        open={openUpdate}
        onClose={handleCloseUpdate}
        PaperProps={{
          sx: {
            backgroundColor: "#101720",
            color: "white",
            boxShadow: "0 0 7px #666",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle style={{ fontWeight: "600", letterSpacing: "-0.5px" }}>
          Update This TODO
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) =>
              setUpdatedTodo((s) => ({ ...s, title: e.target.value }))
            }
            sx={{
              "& .MuiInputLabel-root": { color: "#ccc" },
              "& .MuiInputBase-input": { color: "#ccc" },
              "& .MuiInput-underline:before": { borderBottomColor: "#555" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#08315c",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "#ccc" },
            }}
          />
          <TextField
            margin="dense"
            id="details"
            name="details"
            label="Todo Details"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) =>
              setUpdatedTodo((s) => ({ ...s, details: e.target.value }))
            }
            sx={{
              "& .MuiInputLabel-root": { color: "#ccc" },
              "& .MuiInputBase-input": { color: "#ccc" },
              "& .MuiInput-underline:before": { borderBottomColor: "#555" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#08315c",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "#ccc" },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdate}>Disagree</Button>
          <Button onClick={handleConfirmUpdate} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const ToggleButtonStyle = {
  color: "#ccc",
  border: "none",
  fontWeight: 600,
};
