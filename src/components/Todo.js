import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/GridLegacy";

// Icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "10px",
          backgroundColor: "#111e2d",
          height: 70,
          width: 770,
          margin: "0 auto",
        }}
      >
        <CardContent sx={{ width: 770 }}>
          <Grid
            container
            spacing={2}
            sx={{ height: 70, width: 770, padding: "10px" }}
          >
            <Grid
              item
              xs={9}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
              style={{ padding: "0" }}
            >
              <Typography variant="h6" sx={{ color: "#ccc" }}>
                First TODO
              </Typography>
            </Grid>

            <Grid
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                gap: 1,
              }}
            >
              <IconButton aria-label="check" style={IconStyle}>
                <CheckIcon />
              </IconButton>

              <IconButton aria-label="edit" style={IconStyle}>
                <EditIcon />
              </IconButton>

              <IconButton aria-label="delete" style={IconStyle}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

const IconStyle = {
  background: "#0e76ddff",
  color: "white",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
};



