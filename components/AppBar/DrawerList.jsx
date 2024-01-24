import { useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { LanguageContext, Text } from "@/utils/Languages";
import Link from "../Common/Link";
import {
  AppsIcon,
  BookmarkIcon,
  DarkModeIcon,
  FlashIcon,
  HomeIcon,
  LightModeIcon,
  LogoutIcon,
  KeyIcon,
  StarsIcon,
  SettingsIcon,
  TranslateIcon,
} from "../Common/Icons";
import { useMemo } from "react";

const links = (id) =>
  [
    { name: "homepage", icon: HomeIcon, link: "/" },
    { name: "topmemes", icon: FlashIcon, link: "/top" },
    {
      ...(id !== null
        ? { name: "create", icon: StarsIcon, link: "/create" }
        : { name: "login", icon: KeyIcon, link: "/login" }),
    },
    { name: "categories", icon: AppsIcon, link: "/search" },
    { name: "savedMemes", icon: BookmarkIcon, link: "/saved" },
    { name: "settings", icon: SettingsIcon, link: "/settings" },
  ]
    .map((link) => {
      if (id === null && link.name === "savedMemes") {
        return null;
      } else {
        return link;
      }
    })
    .filter(Boolean);

export const DrawerList = ({
  avatarsrc = "avatar.png",
  username,
  id,
  mode,
  signOut,
  toggleMode,
}) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const drawerLinks = useMemo(() => {
    return links(id);
  }, [id]);

  const color = useMemo(() => {
    return mode === "light" ? "black" : "white";
  }, [mode]);

  const handleChangeLanguage = () => {
    const language = userLanguage === "en" ? "np" : "en";
    userLanguageChange(language);
  };
  return (
    <>
      <Avatar alt="Hait user" src={avatarsrc} sx={styles.avatar} />
      <Box sx={styles.userBox}>
        <Typography sx={styles.user}>HI {username ?? "Friend"}!</Typography>
        <Box>
          <IconButton
            onClick={toggleMode}
            color="inherit"
            sx={styles.marginRight}
          >
            {mode === "light" ? (
              <DarkModeIcon color={color} />
            ) : (
              <LightModeIcon color={color} />
            )}
          </IconButton>

          <IconButton
            sx={styles.marginRight}
            onClick={handleChangeLanguage}
            color="inherit"
          >
            <TranslateIcon color={color} />
          </IconButton>
          <IconButton onClick={signOut} color="inherit" sx={styles.marginRight}>
            <LogoutIcon color={color} />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <List>
        {drawerLinks.map(({ name, link, icon: Icon }) => (
          <Link
            href={link}
            key={name}
            sx={{
              color: mode === "light" ? "text.secondary" : "white",
              textDecoration: "none",
            }}
          >
            <ListItem
              key={name}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor:
                    mode === "light" ? "secondary.main" : "primary.main",
                },
                "&:hover > div  ": {
                  color: mode === "light" ? "white" : "white",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: mode === "light" ? "text.secondary" : "white",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={<Text tid={name} />}
                sx={{
                  color: mode === "light" ? "text.secondary" : "white",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </>
  );
};

const styles = {
  marginRight: { mr: 0 },
  marginRight: { mr: 0 },
  avatar: {
    cursor: "pointer",
    mt: 6,
    ml: 2,
  },
  userBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: { display: "flex", marginLeft: "20px", fontWeight: "bold" },
};

export default DrawerList;
