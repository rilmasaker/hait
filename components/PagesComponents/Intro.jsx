import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";

const introLink =
  "https://firebasestorage.googleapis.com/v0/b/hait-344604/o/video%2FhaitIntro.mp4?alt=media&token=64c7915c-dc75-4c57-8b5f-83cffe98f60e";

const Intro = () => {
  const [isIntroHide, setHideIntro] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleHide = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("intro", JSON.stringify(false));
      setHideIntro(false);
    }
  };

  useEffect(() => {
    const updateMobile = () => {
      let showIntro = true;
      if (typeof window !== "undefined") {
        showIntro =
          JSON.parse(localStorage.getItem("intro")) === null
            ? showIntro
            : JSON.parse(localStorage.getItem("intro"));
      }
      setHideIntro(showIntro);
    };

    updateMobile();
  }, []);

  const open = Boolean(anchorEl);
  const poperid = open ? "simple-popper" : undefined;

  const handleClickPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (!isIntroHide) {
    return null;
  }
  return (
    <Box
      sx={{
        color: "text.secondary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
        mb: 4,
      }}
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography align="center" variant="h4" component="div">
            Fast Tutorial
          </Typography>
          <CardMedia component={"video"} src={introLink} controls />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" onClick={handleClickPopper}>
            I watched. Hide It.
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
              <Typography>Are you sure?</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleHide}
                >
                  Yes, hide{" "}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickPopper}
                >
                  Don&apos;t hide{" "}
                </Button>
              </Box>
            </Box>
          </Popper>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Intro;
