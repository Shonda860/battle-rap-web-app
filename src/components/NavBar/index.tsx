import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  marginRight: theme.spacing(2),
  "&:hover": {
    color: theme.palette.primary.main,
    opacity: 1,
  },
  "&.Mui-selected": {
    fontWeight: "bold",
  },
}));

const StyledSearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  "&:hover": {
    backgroundColor: "#e5e5e5",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function NavBar() {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <StyledSearchBox>
          <StyledSearchIcon />
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </StyledSearchBox>
        <StyledTabs>
          <StyledTab label="Upcoming Battles" />
          <StyledTab label="Rankings" />
          <StyledTab label="Blog" />
          <StyledTab label="Forum" />
        </StyledTabs>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </div>{" "}
        <Avatar
          alt="User"
          src="https://via.placeholder.com/40"
          sx={{ mr: 2 }}
        />
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
