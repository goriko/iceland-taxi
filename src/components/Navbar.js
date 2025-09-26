import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { PRIMARY } from "../constants/UI";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import { HashLink } from "react-router-hash-link";

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

const pageLinks = {
  Home: "/#home",
  "Airport Transfer": "/airport-transfer",
  Tours: "/#chauffeur-services",
  Reviews: "/#reviews",
  FAQS: "/#faqs",
  About: "/#about-us",
  Contact: "/#contact-us",
};


function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: PRIMARY }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            component="img"
            src="/IWLogo.png"
            alt="Iceland Grand Tours Logo"
            sx={{ 
              display: { xs: "none", md: "flex" }, 
              mr: 1, 
              width: 50, 
              height: 50,
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "1px"
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ICELAND GRAND TOURS
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={HashLink}
                  smooth
                  to={pageLinks[page]}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            component="img"
            src="/IWLogo.png"
            alt="Iceland Grand Tours Logo"
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              mr: 1, 
              width: 40, 
              height: 40,
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "1px"
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ICELAND GRAND TOURS
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={HashLink}
                smooth
                to={pageLinks[page]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", mx: 1 }}
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