import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import AdminCreateUser from "../components/AdminCreateUser";
import AdminRestrictions from "../components/AdminRestrictions";
import { Button, Grid } from "@mui/material";
import LogoUni from "../assets/icons/LogoUni.ico";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "../style/LoginStyle.css";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerAdmin() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuData, setMenuData] = useState("AdminCreateUser");
  const [drawerName, setDrawerName] = useState("Usuarios"); // Estado para el nombre del cajón

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (name) => {
    setDrawerName(name); // Actualiza el nombre del cajón al hacer clic en un elemento del menú
    handleDrawerClose(); // Cierra el cajón después de hacer clic en un elemento del menú
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={5}
        open={open}
        sx={{ backgroundColor: "#FFFFFF", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {drawerName}
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <img src={LogoUni} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            background:
              "linear-gradient(180deg, rgba(0, 2, 58, 0.90) 0%, rgba(0, 2, 58, 0.00) 100%), #000",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "white" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            onClick={() => setMenuData("AdminCreateUser")}
          >
            <ListItemButton onClick={() => handleMenuItemClick("Usuarios")}>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Usuarios" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding onClick={() => setMenuData("Restrictions")}>
            <ListItemButton
              onClick={() => handleMenuItemClick("Restricciones")}
            >
              <ListItemIcon>
                <KeyIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Restricciones" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ marginTop: "auto" }} className="boton">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Button
                  startIcon={<ExitToAppIcon />}
                  sx={{
                    color: "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar Cuenta"
                sx={{
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <Grid
            className="DrawerAdmin"
            item
            xs={12}
            sm={12}
            style={{
              height: "82vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuData == "AdminCreateUser" && <AdminCreateUser />}
            {menuData == "Restrictions" && <AdminRestrictions />}
          </Grid>
        </Typography>
      </Main>
    </Box>
  );
}
