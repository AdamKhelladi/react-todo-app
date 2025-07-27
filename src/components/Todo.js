import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Todo() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "10px",
          backgroundColor: "#111e2d",
        }}
      >
        <CardContent>
          <Typography gutterBottom sx={{ color: "#ccc", fontSize: 14 }}>
            First TODO
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
