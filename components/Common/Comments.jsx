import { useState } from "react";
import { useAuthUser } from "next-firebase-auth";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SendIcon } from "./Icons";

import { Text } from "@/utils/Languages";
import { addComment } from "@/firebase/write/memes";

const Comments = ({ textComments, memeId }) => {
  const [commentsArray, setComments] = useState(textComments);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const user = useAuthUser();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      const newComment = {
        username: user?.displayName ?? user?.username,
        text: value,
        avatarsrc: user?.photoURL,
        memeId,
      };
      const newComments = [newComment].concat(commentsArray);
      setComments(newComments);
      setValue("");
      setDisabled(true);
      addComment(newComment);
    }
  };
  return (
    <Paper sx={styles.paper}>
      {!!user?.id && (
        <Box
          component="form"
          sx={{
            m: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" sx={styles.title}>
            Comments
          </Typography>
          <TextField
            onChange={handleChange}
            value={value}
            multiline
            rows={2}
            placeholder={"Your comments goes here"}
            variant="outlined"
            sx={{
              width: "100%",
            }}
            InputProps={{
              sx: {
                borderRadius: "8px",
                padding: "10px",
              },
            }}
          />
          <Stack direction="row" spacing={2} sx={styles.stack}>
            <Button
              sx={styles.button}
              variant="contained"
              startIcon={<SendIcon />}
              disabled={!value || disabled}
              onClick={handleClick}
            >
              <Text tid="send" />
            </Button>
          </Stack>
        </Box>
      )}

      {commentsArray?.map((comment) => {
        return (
          <Box key={comment.id} sx={styles.margin}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={comment.avatarsrc} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 10, md: 14 } }}>
                    {comment.username} | {comment.timestamp}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    sx={styles.comments}
                  >
                    {comment.text}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
};

const styles = {
  title: {
    mb: 2,
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "33px",
    letterSpacing: "-0.01em",
  },
  comments: { wordBreak: "break-word", fontSize: 12 },
  margin: { mr: 2, ml: 2 },
  paper: {
    display: "flex",
    flexDirection: "column",
    pb: 2,
    m: { xs: 1, sm: 1, md: 2 },
    borderRadius: "8px",
  },
  stack: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  button: {
    height: "32px",
    width: "94px",
    borderRadius: "8px",
    padding: "7px, 16px, 7px, 12px",
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
  },
};

export default Comments;
