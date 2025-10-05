import "./App.css";
import Todolist from "./components/Todolist.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import { TodosContext } from "./contexts/TodosContext.js";

import { v4 as uuidv4 } from "uuid";

const theme = createTheme({
  typography: {
    fontFamily: ["main-font"],
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "Reading Books",
    details: "The Book That Iam Reading Now Is Fosol Fi Osol Al Tafsir",
    isComplited: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TodosContext.Provider
          value={{
            todos,
            setTodos,
            titleInput,
            setTitleInput,
          }}
        >
          <Todolist />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

