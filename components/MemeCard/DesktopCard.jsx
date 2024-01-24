import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useAuthUser } from "next-firebase-auth";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";

import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { BookmarkIcon, HeartIcon, HeartBrokenIcon } from "../Common/Icons";
import Link from "../Common/Link";

import ShareButton from "../Common/ShareButton";

import Tags from "./Tags";
import {
  removeSavedMeme,
  saveMeme,
  dislikeMeme,
  declineMeme,
  likeMeme,
} from "@/firebase/write/memes";

import { getSavedIds } from "@/firebase/read/users";
import { SnackbarContext } from "@/utils/snackbarContext";
import { isAdmin } from "@/utils/helpers";

const MemeCard = ({
  id,
  src,
  category,
  dislikes,
  likes,
  tags,
  topText,
  timestamp,
  bottomText,
  video,
  username,
  userSrc,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [ratingLikes, setLikes] = useState(likes);
  const [ratingDislikes, setDislikes] = useState(dislikes);
  const [isRatingClicked, setIsRatingClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleOpenSnackbar } = useContext(SnackbarContext);

  const user = useAuthUser(); //TODO all memes know user
  const [savedState, setSavedState] = useState([]);
  const isSaved = savedState?.includes(id);

  const handleSave = () => {
    if (user.id) {
      if (isSaved) {
        removeSavedMeme(id, user.id);
        setSavedState(savedState.filter((saved) => saved !== id));
        handleOpenSnackbar("success", "Removed from saved");
      } else {
        saveMeme(id, user.id);
        setSavedState(savedState.concat(id));
        handleOpenSnackbar("success", "Saved");
      }
    }
  };

  const handleClickMinus = () => {
    if (!isRatingClicked) {
      setIsRatingClicked(true);
      if (typeof window !== "undefined") {
        let likedArray = JSON.parse(localStorage.getItem("bione")) || [];
        if (likedArray.indexOf(id) === -1) {
          if (likedArray.length > 99) {
            //clean storage
            likedArray = [];
          }
          localStorage.setItem("bione", JSON.stringify(likedArray.concat(id)));
          setDislikes(ratingDislikes + 1);
          dislikeMeme(id);
        } else {
          handleOpenSnackbar("info", "You already clicked");
        }
      }
    }
  };
  const handleClickPlus = () => {
    if (!isRatingClicked) {
      setIsRatingClicked(true);
      if (typeof window !== "undefined") {
        let likedArray = JSON.parse(localStorage.getItem("bione")) || [];
        if (likedArray.indexOf(id) === -1) {
          if (likedArray.length > 99) {
            //clean storage
            likedArray = [];
          }
          localStorage.setItem("bione", JSON.stringify(likedArray.concat(id)));
          setLikes(ratingLikes + 1);
          likeMeme(id);
        } else {
          handleOpenSnackbar("info", "You already clicked");
        }
      }
    }
  };

  const handleDecline = () => {
    declineMeme(id)
      .then(() => {
        handleOpenSnackbar("success", "Meme decilned successfully");
      })
      .catch((e) => {
        handleOpenSnackbar(
          "error",
          "Decline error. Refresh browser and try again"
        );
      });
  };
  const handleClickPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const poperid = open ? "simple-popper" : undefined;

  useEffect(() => {
    async function fetchData() {
      const savedIds = await getSavedIds(user.id);

      setSavedState(savedIds);
    }
    fetchData();
  }, [user?.id]);
  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardHeader
          sx={styles.cardHeader}
          avatar={
            <Avatar src={userSrc} sx={styles.cardAvatar}>
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleSave}>
              <BookmarkIcon
                style={
                  isSaved ? { filter: "drop-shadow(0px 0px 8px #DE6161)" } : {}
                }
              />
            </IconButton>
          }
          subheader={timestamp}
          title={username ?? category?.toUpperCase()}
        />

        <CardContent sx={styles.cardContent}>
          <Box
            component={Link}
            href={`/meme/${id}`}
            sx={{ textDecoration: "none", color: "text.secondary" }}
          >
            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={styles.typography}
            >
              {topText}
            </Typography>
            {video ? (
              <CardMedia
                component={video ? "video" : "img"}
                sx={styles.cardMedia}
                src={src}
                controls
              />
            ) : isMobile ? (
              <CardMedia
                component={video ? "video" : "img"}
                sx={styles.cardMedia}
                src={src}
                controls
              />
            ) : (
              <Image
                src={src}
                width={900}
                height={700}
                responsive={true}
                alt={topText ?? bottomText ?? "hait-meme"}
                placeholder="blur"
                quality={100}
                priority
                blurDataURL="blur.jpg"
              />
            )}

            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={styles.typography}
            >
              {bottomText}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={styles.cardActions}>
          <Box sx={styles.boxAction}>
            <IconButton
              aria-label="add to favorites"
              onClick={handleClickPlus}
              disabled={isRatingClicked}
            >
              <HeartIcon />
            </IconButton>
            <Typography
              sx={{
                color: "rating.main",
                fontWeight: 700,
                fontSize: 24,
                ml: 1,
                mr: 1,
              }}
            >
              {ratingLikes}
            </Typography>
            <IconButton
              aria-label="add to favorites"
              onClick={handleClickMinus}
              disabled={isRatingClicked}
            >
              <HeartBrokenIcon />
            </IconButton>

            <Typography
              textAlign="center"
              variant="p"
              component="span"
              sx={styles.typo}
            >
              {ratingDislikes}
            </Typography>
          </Box>

          <ShareButton url={`https://www.hait-nepal.com/meme/${id}`} />
        </CardActions>
        {isAdmin(user?.id) && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              aria-label="add to favorites"
              onClick={handleClickPopper}
              color="error"
            >
              ADMIN DELETE
            </IconButton>
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
                <Typography>Are you sure delete a meme?</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDecline}
                  >
                    Yes, delete{" "}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickPopper}
                  >
                    Don&apos;t delete{" "}
                  </Button>
                </Box>
              </Box>
            </Popper>
          </Box>
        )}

        <Tags tags={tags} />
      </Card>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    m: { xs: 1, sm: 1, md: 2 },
    mt: { xs: 1, sm: 1, md: 0 },
    textDecoration: "none",
  },
  typography: {
    mb: 2,
    mt: 2,
    color: "text.main",
    wordBreak: "keep-all",
    fontSize: { xs: "20px", sm: "23px", md: "25px", lg: "35px" },
  },
  cardContent: {
    width: "100%",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
  },
  card: { width: "100%", borderRadius: "8px", maxHeight: "60%" },
  boxAction: {
    display: "flex",
    justifyContent: "center",
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
    justifyContent: "space-between",
    pb: 0,
    ml: 0,
  },
  cardMedia: { minHeight: { xs: "200px" } },
  typo: {
    color: "rating.main",
    fontWeight: 700,
    fontSize: 24,
    ml: 1,
    mr: 1,
  },
};

export default MemeCard;
