import { useState, useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Tags from "../MemeCard/Tags";
import { SnackbarContext } from "@/utils/snackbarContext";

import { aprooveMeme, declineMeme } from "@/firebase/write/memes";
import { blockUser } from "@/firebase/write/users";

const AdminCard = ({
  authorId,
  id,
  src,
  category,
  tags,
  topText,
  bottomText,
  handleRemove,
  username,
  video,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState("policy");
  const { handleOpenSnackbar } = useContext(SnackbarContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleAproove = () => {
    aprooveMeme(id)
      .then(() => {
        handleOpenSnackbar("success", "Meme aprooved successfully");
        handleRemove(id);
      })
      .catch((e) => {
        handleOpenSnackbar(
          "error",
          "Aproove error. Refresh browser and try again"
        );
      });
  };

  const handleBlock = () => {
    blockUser(value, authorId)
      .then(() => {
        handleOpenSnackbar("success", "User blocked successfully");
      })
      .catch((e) => {
        handleOpenSnackbar(
          "error",
          "Block error. Refresh browser and try again"
        );
      });
    handleClickPopper();
  };

  const handleDecline = () => {
    declineMeme(id)
      .then(() => {
        handleOpenSnackbar("success", "Meme decilned successfully");

        handleRemove(id);
      })
      .catch((e) => {
        handleOpenSnackbar(
          "error",
          "Decline error. Refresh browser and try again"
        );
      });
  };

  const open = Boolean(anchorEl);
  const poperid = open ? "simple-popper" : undefined;
  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardHeader
          sx={styles.cardHeader}
          avatar={<Avatar sx={styles.cardAvatar}>C</Avatar>}
          title={username ?? category?.toUpperCase()}
        />

        <CardContent sx={styles.cardContent}>
          <Box sx={{ color: "text.secondary" }}>
            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={styles.typography}
            >
              {topText}
            </Typography>
            <CardMedia
              component={video ? "video" : "img"}
              sx={styles.cardMedia}
              src={src}
              controls
            />
            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={styles.typography}
            >
              {bottomText}
            </Typography>
          </Box>
          <Tags tags={tags} />
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <Button
            fullWidth
            sx={styles.buttonAproove}
            variant="contained"
            onClick={handleAproove}
          >
            Aproove
          </Button>
          <Button
            fullWidth
            sx={styles.buttonDecline}
            variant="outlined"
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            fullWidth
            sx={styles.buttonBlock}
            variant="outlined"
            onClick={handleClickPopper}
          >
            Block
          </Button>
          <Popper id={poperid} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: "background.paper",
                justifyContent: "space-between",

                display: "flex",
                flexDirection: "column",
                width: 300,
              }}
            >
              <Typography>Are you sure block the user?</Typography>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  The reason for blocking the user
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="policy"
                    control={<Radio />}
                    label="Inconsistent with the policy"
                  />
                  <FormControlLabel
                    value="offense"
                    control={<Radio />}
                    label="Offensive content"
                  />
                  <FormControlLabel
                    value="porn"
                    control={<Radio />}
                    label="Porn content"
                  />
                </RadioGroup>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBlock}
                >
                  Yes, block{" "}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickPopper}
                >
                  Don&apos;t block{" "}
                </Button>
              </Box>
            </Box>
          </Popper>
        </CardActions>
      </Card>
    </Box>
  );
};

const styles = {
  box: { display: "flex", justifyContent: "space-between", width: "100%" },
  typography: {
    mb: 2,
    wordBreak: "keep-all",
    textDecoration: "none",
    fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "35px" },
  },
  cardContent: { width: "100%", borderRadius: "8px" },
  card: { width: "100%", borderRadius: "8px" },
  box: {
    display: "flex",
    justifyContent: "center",
    m: { xs: 1, sm: 1, md: 2 },
    mt: { xs: 1, sm: 1, md: 0 },
    textDecoration: "none",
  },
  cardHeader: {
    fontSize: "8px",
    "> div > span": {
      fontSize: "8px",
      color: "#656565",
    },
  },
  cardAvatar: {
    bgcolor: "icon.main",
    height: "16px",
    width: "16px",
    fontSize: "8px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-evenly",
    mb: 2,
    mr: 1,
    ml: 1,
  },
  cardMedia: { minHeight: { xs: "200px" } },
  typo: {
    color: "rating.main",
    fontWeight: 700,
    fontSize: 24,
    ml: 1,
    mr: 1,
  },
  buttonAproove: {
    height: "36px",
    borderRadius: "8px",
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
  },
  buttonDecline: {
    height: "36px",
    borderRadius: "8px",
    color: "secondary.main",
    borderColor: "secondary.main",
  },
  buttonBlock: {
    height: "36px",
    borderRadius: "8px",
    borderColor: "primary.main",
  },
};
export default AdminCard;
