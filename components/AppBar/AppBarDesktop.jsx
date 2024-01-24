import { useState, useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
  AddIcon,
  DarkModeIcon,
  LightModeIcon,
  SearchIcon,
  TranslateIcon,
} from "../Common/Icons";

import { LanguageContext, Text } from "@/utils/Languages";

import Create from "../MemeGenerator/CreateMeme";
import Login from "../PagesComponents/Login";
import Link from "../Common/Link";
import Modal from "../Common/Modal";

const links = [{ name: "top", link: "/top" }];

const AppBarDesktop = ({ avatarsrc, isLoggedIn = true, mode, toggleMode }) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const buttonText = isLoggedIn ? "uploadButton" : "login";
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeLanguage = () => {
    const language = userLanguage === "en" ? "np" : "en";
    userLanguageChange(language);
  };

  return (
    <Toolbar sx={styles.toolbarDesktop}>
      <Typography variant="h4" sx={styles.logo} component={Link} href="/">
        HAIT
      </Typography>
      <Box>
        <List sx={styles.list}>
          {links.map(({ name, link }) => (
            <Link href={link} key={name} sx={styles.color}>
              <Text tid={name} />
            </Link>
          ))}
          <IconButton color="inherit" component={Link} href={"search"}>
            <SearchIcon />
          </IconButton>
          <IconButton
            onClick={toggleMode}
            color="inherit"
            sx={styles.marginRight}
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton
            sx={styles.marginRight}
            onClick={handleChangeLanguage}
            color="inherit"
          >
            <TranslateIcon />
          </IconButton>
          <Button variant="contained" onClick={handleOpen} sx={styles.button}>
            {isLoggedIn ? <AddIcon /> : null}
            <Text tid={buttonText} />
          </Button>
          <Avatar alt="Hait user" src={avatarsrc} />
        </List>
        <Modal
          onClose={handleClose}
          open={open}
          component={isLoggedIn ? Create : Login}
        />
      </Box>
    </Toolbar>
  );
};

const styles = {
  color: {
    color: "white",
  },
  marginRight: { mr: 0 },
  marginRight: { mr: 1 },

  logo: {
    color: "inherit",
    display: "inline",
    flexGrow: 1,
    fontFamily: "Road Rage",
    fontSize: "50px",
    textDecoration: "none",
  },
  toolbarDesktop: {
    display: { sm: "none", xs: "none", md: "flex" },
    pl: 1,
    pr: 1,
    justifyContent: "space-between",
    mr: 8,
    ml: 8,
  },
  button: {
    backgroundColor: "secondary.main",
    textTransform: "none",
    color: "white",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#a72323",
      color: "white",
    },
  },
  list: {
    width: "600px",
    display: "flex",
    textDecoration: "none",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
export default AppBarDesktop;
