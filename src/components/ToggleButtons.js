import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import "./ToggleButtons.css";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
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
  );
}

const ToggleButtonStyle = {
  color: "#ccc",
  border: "none",
};