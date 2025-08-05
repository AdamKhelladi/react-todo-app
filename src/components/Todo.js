import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { Check, Delete, Edit } from "@mui/icons-material";

const IconStyle = {
  color: "#ccc",
  transition: ".3s",
  "&:hover": { color: "#fff" },
};

export default function Todo({ theTodo, toCheckClick }) {
  const baseIconStyle = {
    transition: ".3s",
    "&:hover": { color: "#fff" },
  };

  const checkStyle = {
    ...baseIconStyle,
    color: theTodo.isComplited ? "#0e76ddff" : "#ccc",
    "&:hover": { color: theTodo.isComplited ? "#0e76ddff" : "#fff" },
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
    toCheckClick(theTodo.id);
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
              {theTodo.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#999", textAlign: "left", fontSize: "18px" }}
            >
              {theTodo.details}
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
