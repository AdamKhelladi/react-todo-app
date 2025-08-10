import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { Check, Delete, Edit } from "@mui/icons-material";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isComplited = !t.isComplited;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeletDialogClose = () => {
    setOpen(false);
  };

  const handleClickUpdate = () => {
    setUpdate(true);
  };

  const handleUpdateDialogClose = () => {
    setUpdate(false);
  };

  const handleConfirmDelete = () => {
    const newTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setOpen(false);
  };

  const handleConfirmUpdate = () => {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        return { ...t, title: updatedTodo.title, details: updatedTodo.details };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setUpdate(false);
  };

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

  return (
    <>
      <Dialog
        open={open}
        onClose={handleDeletDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: "#101720",
            color: "white",
            boxShadow: "0 0 7px #666",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontWeight: "600", letterSpacing: "-0.5px" }}
        >
          {"Delete this TODO?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "#cacacaff" }}
          >
            Are you sure you want to delete this todo? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeletDialogClose}>Disagree</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={update}
        onClose={handleUpdateDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            backgroundColor: "#101720",
            color: "white",
            boxShadow: "0 0 7px #666",
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontWeight: "600", letterSpacing: "-0.5px" }}
        >
          {"Update This TODO"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, title: e.target.value });
            }}
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
            autoFocus
            required
            margin="dense"
            id="details"
            name="details"
            label="Todo Details"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) => {
              setUpdatedTodo({ ...updatedTodo, details: e.target.value });
            }}
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
          <Button onClick={handleUpdateDialogClose}>Disagree</Button>
          <Button onClick={handleConfirmUpdate} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>

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
                  textDecoration: todo.isComplited ? "line-through" : "",
                  "@media (max-width: 768px)": {
                    fontSize: "18px",
                  },
                }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#999",
                  textAlign: "left",
                  fontSize: "18px",
                  "@media (max-width: 768px)": {
                    fontSize: "15px",
                  },
                }}
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
              <IconButton
                aria-label="edit"
                sx={editStyle}
                onClick={() => {
                  handleClickUpdate();
                }}
              >
                <Edit />
              </IconButton>
              <IconButton
                aria-label="delete"
                sx={deleteStyle}
                onClick={() => {
                  handleClickOpen();
                }}
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}


