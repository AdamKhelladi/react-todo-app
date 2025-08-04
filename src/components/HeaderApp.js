import PersonIcon from "@mui/icons-material/Person";
import "./HeaderApp.css";

export default function HeaderApp() {
  return (
    <div className="header">
      <h2>TO DO LIST</h2>
      <div className="infos">
        <button className="login">Login</button>
        <PersonIcon className="personIcon" />
      </div>
    </div>
  );
}
