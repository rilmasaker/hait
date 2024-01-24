import { useContext } from "react";
import { useAuthUser } from "next-firebase-auth";

import MaterialAppBar from "@mui/material/AppBar";

import { useTheme } from "@mui/material/styles";

import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";
import ColorModeContext from "../../utils/modeContext";
import Crumbs from "./Breadcrumbs";

const AppBar = () => {
  const {
    palette: { mode },
  } = useTheme();
  const { toggleMode } = useContext(ColorModeContext);

  const user = useAuthUser();

  return (
    <>
      <MaterialAppBar
        position="static"
        sx={styles.appbar}
        avatarsrc={user?.photoURL}
      >
        <AppBarMobile
          username={user?.displayName}
          avatarsrc={user?.photoURL}
          id={user?.id} //TODO
          signOut={user?.signOut}
          mode={mode}
          toggleMode={toggleMode}
        />
        <AppBarDesktop
          mode={mode}
          toggleMode={toggleMode}
          avatarsrc={user?.photoURL}
          isLoggedIn={!!user?.id} //TODO
        />
      </MaterialAppBar>
      <Crumbs mode={mode} />
    </>
  );
};

const styles = {
  appbar: {
    background: "linear-gradient(90deg, #DE6161 -5.42%, #2657EB 116.39%)",
  },
};

export default AppBar;
