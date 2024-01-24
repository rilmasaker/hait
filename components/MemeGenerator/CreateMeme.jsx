import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { ImageIcon, VideoIcon } from "../Common/Icons";

import { Text } from "@/utils/Languages";

import Link from "../Common/Link";

const CreateMeme = () => {
  return (
    <Paper elevation={3} sx={styles.paper}>
      <Typography variant="h4" sx={styles.textTop}>
        {<Text tid="post" />}
      </Typography>
      <Typography ml={2}>{<Text tid="choose" />}</Typography>
      <Box sx={styles.textBottom}>
        <Button
          fullWidth
          variant="outlined"
          sx={styles.buttonCreate}
          component={Link}
          href="/create/image"
        >
          <ImageIcon />
          <Typography variant="p" sx={styles.typo}>
            {<Text tid="upload" />}
          </Typography>
        </Button>
        <Button
          sx={styles.buttonUpload}
          variant="outlined"
          fullWidth
          component={Link}
          href="/create/video"
        >
          <VideoIcon />
          <Typography variant="p" sx={styles.typo}>
            {<Text tid="uploadVideo" />}
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
};

const styles = {
  typo: { color: "text.primary" },
  paper: {
    display: { xs: "column" },
    margin: 1,
  },
  textTop: {
    margin: 2,
    pt: 6,
  },
  textBottom: {
    display: "flex",
    justifyContent: "space-around",
    padding: 1,
  },
  buttonCreate: {
    display: "flex",
    flexDirection: "column",
    margin: 2,
    border: "3px solid #777DD5",
    color: "#777DD5",
    borderRadius: "5px",
    textTransform: "none",
  },
  buttonUpload: {
    display: "flex",
    flexDirection: "column",
    margin: 2,
    textTransform: "none",
    borderRadius: "5px",
    border: "3px solid #DE6161",
    color: "secondary.main",
    "&:hover": {
      border: "1px solid #DE6161",
    },
  },
};

export default CreateMeme;
