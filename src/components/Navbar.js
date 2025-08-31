import * as React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { PRIMARY } from "../constants/UI";
import { Button, AppBar, Box, Toolbar, Container } from "@mui/material";

const { useState } = React;
const pages = [
  "Home",
  "Airport Transfer",
  "Tours",
  "Reviews",
  "FAQS",
  "About",
  "Contact",
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: PRIMARY }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, ml: 35 }} />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 35 }}
            justifyContent="flex-end"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;