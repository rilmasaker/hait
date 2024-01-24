import { useAuthUser } from "next-firebase-auth";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ListItemIcon from "@mui/material/ListItemIcon";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  LockIcon,
  SettingsIcon,
} from "../Common/Icons";
import Link from "./Link";
import { Text } from "@/utils/Languages";

const UserSettings = (mode = "dark") => {
  const user = useAuthUser();

  return !!user?.id ? (
    <Paper sx={styles.paper}>
      <Box sx={styles.box}>
        <Typography variant="paragraph">
          {<Text tid="your account" />}
        </Typography>
      </Box>

      <List sx={styles.margin}>
        <Divider sx={styles.margin} />

        <ListItemButton component={Link} href="/saved">
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary={<Text tid="savedMemes" />} />
        </ListItemButton>
        <Divider sx={{ ml: 2, mr: 2 }} />
        <ListItemButton>
          <ListItemIcon component={Link} href={"/comments"}>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary={<Text tid="yourComments" />} />
        </ListItemButton>
        <Divider sx={styles.margin} />
        <ListItemButton component={Link} href={"/settings"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={<Text tid="settings" />} />
        </ListItemButton>
      </List>
    </Paper>
  ) : (
    <Paper sx={styles.paperLogOut}>
      <LockIcon />
      <Typography sx={styles.typo} align="center">
        {<Text tid="toSeeYourAccount" />}
      </Typography>
    </Paper>
  );
};

const styles = {
  margin: { ml: 2, mr: 2 },

  paperLogOut: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "150px",
    mt: 0,
    mb: 2,
    borderRadius: "8px",
    color: "#fff",
    background:
      "linear-gradient(255.46deg, rgba(82, 90, 201, 0.8) -12.26%, rgba(222, 97, 97, 0.8) 110.59%)",
  },
  typo: {
    fontWeight: "600",
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: "24px",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 2,
    pl: 2,
    pr: 2,
    wordBreak: "keep-all",
  },
  paper: {
    mb: 2,
    height: 200,
    borderRadius: "8px",
    width: "100%",
  },
};

export default UserSettings;
