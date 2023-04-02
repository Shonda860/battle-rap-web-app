import React, { useCallback, useEffect, useState, HTMLAttributes } from "react";
import { keydownScoped } from "react-keydown";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  ThemeProvider,
  CssBaseline,
  Switch,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";
import SidePanel from "./components/SidePanel";
import NavBar from "./components/NavBar/";
import { createGlobalStyle } from "styled-components";
import LandingPage from "./components/LandingPage/";

const GlobalStyle = createGlobalStyle`
  .side-panel {
    background-color: black;
  }

  .nav-bar {
    background-color: black;
  }
`;

interface AppBarProps {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
}

interface SidePanelProps {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
  menuItemProps: HTMLAttributes<HTMLDivElement>;
}

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function AppBar({ darkMode, handleDarkModeToggle }: AppBarProps) {
  const icon = darkMode ? <Brightness7 /> : <Brightness4 />;

  return (
    <>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">The Punchline</Typography>  <IconButton aria-label="Toggle light/dark mode" onClick={handleDarkModeToggle}>
          {icon}
        </IconButton> 
      </Toolbar>
      <Switch
        checked={darkMode}
        onChange={handleDarkModeToggle}
        inputProps={{ "aria-label": "Toggle light/dark mode" }}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": { color: "primary.main" },
        }}
      />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, [setDarkMode]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        handleDarkModeToggle();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleDarkModeToggle]);

  const sidePanelStyle = {
    width: "14%",
    height: "100vh",
    position: "fixed",
    top: "60px",
    left: 0,
  };

  const navBarStyle = {
    marginLeft: "14%",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1, // Add z-index to keep navbar on top of content
  };

  const contentStyle = {
    marginLeft: "14%",
    paddingTop: "64px", // Add padding to push content below navbar
    flexGrow: 1, // Add flexGrow to allow content to fill remaining space
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <GlobalStyle />
        <div style={containerStyle}>
          <div className="side-panel" style={sidePanelStyle}>
            <SidePanel
              darkMode={darkMode}
              handleDarkModeToggle={handleDarkModeToggle}
              menuItemProps={{}}
            />
          </div>
          <div style={contentStyle}>
            <LandingPage />
          </div>
          <div className="nav-bar" style={navBarStyle}>
            <NavBar />
          </div>
        </div>
        <AppBar
          darkMode={darkMode}
          handleDarkModeToggle={handleDarkModeToggle}
        />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;