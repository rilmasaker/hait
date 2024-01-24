import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import { MenuIcon, SearchIcon } from "../Common/Icons";

import DrawerList from "./DrawerList";
import Link from "../Common/Link";

const AppBarMobile = ({
  avatarsrc,
  mode,
  toggleMode,
  username,
  signOut,
  id,
}) => {
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Toolbar sx={styles.toolbarMobile}>
      <Typography variant="h4" sx={styles.logo} component={Link} href="/">
        HAIT
      </Typography>
      <Avatar sx={styles.margin} alt="Hait user" src={avatarsrc} />
      <IconButton
        component={Link}
        href="/search"
        sx={styles.margin}
        color="inherit"
      >
        <SearchIcon />
      </IconButton>
      <IconButton onClick={toggleDrawer} sx={styles.cursor}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor={"right"}
        open={drawerState}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        PaperProps={styles.paperProps}
      >
        <DrawerList
          username={username}
          id={id}
          avatarsrc={avatarsrc}
          toggleMode={toggleMode}
          mode={mode}
          signOut={signOut}
        />
      </SwipeableDrawer>
    </Toolbar>
  );
};
const styles = {
  cursor: { cursor: "pointer" },
  logo: {
    color: "inherit",
    display: "inline",
    flexGrow: 1,
    fontFamily: "Road Rage",
    fontSize: "50px",
    textDecoration: "none",
  },
  margin: { mr: 2 },
  paperProps: { sx: { top: "61px", width: { xs: "80%", md: "20%" } } },
  toolbarMobile: {
    display: { xs: "inline-flex", sm: "inline-flex", md: "none" },
    pl: 1,
    pr: 1,
  },
};

export default AppBarMobile;
