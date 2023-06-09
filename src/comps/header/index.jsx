import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { BrandLogo } from "../../assets";
import { THEME_COLORS } from "../../lib/colors";
import { Container } from "@mui/material";
import useColor from "../../hooks/useColor";

const drawerWidth = 240;
const navItems = ["Home", "Developers"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
   const data = useColor()
 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img src={BrandLogo} alt="brand-logo" height={"30px"} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent" position="static" sx={{ px: { xs: "none", }, mb: 3, boxShadow: 'none' }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src={BrandLogo} alt="brand-logo" height={"30px"} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: data.textBtnColor }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{
              borderLeft: `1px solid ${THEME_COLORS.LIGHTGREY}`,
              height: 35,
              marginInline: 30,
            }}
          ></Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{
                color: data.actionBtColor,
                backgroundColor: data.actionBtnBg,
                borderRadius:"4px",
                px: ".75rem",
                '&:hover': {
                  backgroundColor: data.actionBtnBg,
                },
              }}
            >
              Talk to a Data Expert
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Container>
  );
}


export default Header;
