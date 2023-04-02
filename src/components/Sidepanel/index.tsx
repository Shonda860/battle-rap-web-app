import React from "react";
import MenuItem from "./Menu/index";
import VotingPanel from "./VotingPanel";
import './../../css/toggle.css';
// import './index.css'       

interface MenuItemProps {
  className?: string;
}             

interface SidePanelProps {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
  menuItemProps?: React.HTMLAttributes<HTMLDivElement>;
}

const SidePanel: React.FC<SidePanelProps> = ({ darkMode, handleDarkModeToggle, menuItemProps }) => {
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



  return (
    <div className={`side-panel ${darkMode ? 'dark-mode' : ''}`}>
    <div className="side-panel__content">
      <h3 className="side-panel__title">Menu</h3>
      <MenuItem {...menuItemProps} /> {/* Use menuItemProps here */}
    </div>
    <VotingPanel />
  </div>
  );
}

export default SidePanel;
