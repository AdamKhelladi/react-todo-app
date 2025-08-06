import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function InputTodo({ onAddClick }) {
  const { titleInput, setTitleInput} = useContext(TodosContext);

  function handleInputChnage(e) {
    setTitleInput(e.target.value);
  }

  return (
    <Grid container sx={{ marginTop: 2 }}>
      <Grid item xs={9} style={{ width: "70%" }}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            label="Todo Title"
            variant="outlined"
            value={titleInput}
            onChange={(e) => {
              handleInputChnage(e);
            }}
            style={{ width: "100%", color: "#ccc" }}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#ccc", 
              },
              "& .MuiOutlinedInput-root": {
                "& input": {
                  color: "#ccc", 
                },
                "&.Mui-focused": {
                  color: "#ccc",
                },
                "& fieldset": {
                  borderColor: "#08315c", 
                },
                "&:hover fieldset": {
                  borderColor: "#08315c", 
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ccc", 
                },
              },
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={3}
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Button
          variant="outlined"
          style={{
            height: "55px",
            marginTop: "8px",
            width: "88%",
            marginLeft: "15px",
            borderColor: "#08315c",
            color: "#ccc",
            fontWeight: "600",
          }}
          onClick={() => {
            onAddClick();
          }}
        >
          Addition
        </Button>
      </Grid>
    </Grid>
  );
}
