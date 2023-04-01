import React from "react";
import MenuItem from "./Menu/index";
import VotingPanel from "./VotingPanel";
import './../../css/toggle.css';


interface Props {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
}

function SidePanel(props: Props) {
  const { darkMode } = props;

  const panelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1E1E1E",
    height: "100%",
    padding: "16px",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    overflowX: "hidden",
    transition: "0.3s",
    width: "14%",
  };

  const toggleStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "16px",
    left: darkMode ? "32px" : "2px",
  };

  return (
    <div style={panelStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "calc(14 * var(--vh))",
        }}
      >
        <label className="switch" style={toggleStyle}>
          <input type="checkbox" checked={darkMode} onChange={props.handleDarkModeToggle} />
          <span className="slider round" />
        </label>
      </div>
      <VotingPanel />
      <MenuItem />
    </div>
  );
}

export default SidePanel;
