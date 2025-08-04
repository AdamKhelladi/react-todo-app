import "./App.css";
import Todolist from "./components/Todolist.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["main-font"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Todolist />
      </div>
    </ThemeProvider>
  );
}

export default App;
