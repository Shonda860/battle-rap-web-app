import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Switch,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";
import SidePanel from "./components/Sidepanel";

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setDarkMode((prevMode) => !prevMode);
      }
    };
  
    window.addEventListener("keydown", handleKeyDownEvent);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent);
    };
  }, [setDarkMode]);

  const mainContentStyle: React.CSSProperties = {
    marginLeft: "14%", // width of sidebar
    padding: "16px",
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            The Punchline
          </Typography>
          <IconButton
            aria-label="Toggle light/dark mode"
            onClick={handleDarkModeToggle}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
        <Switch
          checked={darkMode}
          onChange={handleDarkModeToggle}
          inputProps={{ "aria-label": "Toggle light/dark mode" }}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "primary.main",
            },
          }}
        />
        <div style={{ display: "flex" }}>
          <SidePanel darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
          <div style={mainContentStyle}>
            {/* Replace with your main content */}
          </div>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default App;