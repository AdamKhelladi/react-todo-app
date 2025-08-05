import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { Check, Delete, Edit } from "@mui/icons-material";

const IconStyle = {
  color: "#ccc",
  transition: ".3s",
  "&:hover": { color: "#fff" },
};

export default function Todo({ title, details }) {
  return (
    <Card
      sx={{
        mt: 3,
        borderRadius: 2,
        bgcolor: "#111e2d",
        maxWidth: 770,
        mx: "auto",
        margin: 0,
        marginBottom: 1
      }}
    >
      <CardContent style={{padding: "10px"}}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={9}>
            
            <Typography variant="h5" sx={{ color: "#ccc", textAlign: "left", fontWeight: "600", fontSize: "20px"}}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#999", textAlign: "left", fontSize: "18px"}}>
              {details} 
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <IconButton aria-label="check" sx={IconStyle}>
              <Check />
            </IconButton>
            <IconButton aria-label="edit" sx={IconStyle}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" sx={IconStyle}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
