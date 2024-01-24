import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";

import { Text } from "@/utils/Languages";
import { UploadIcon } from "../Common/Icons";

const ImageUploadInput = ({ dragEvents, imageUrl, video, avatar = false }) => {
  return (
    <label htmlFor="file-upload" {...dragEvents}>
      {imageUrl ? (
        <Box sx={styles.textBox} id="generatedMeme">
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              {avatar ? (
                <Avatar src={imageUrl} />
              ) : video ? (
                <CardMedia
                  component={video ? "video" : "img"}
                  sx={styles.cardMedia}
                  src={imageUrl}
                  controls
                />
              ) : (
                <Image
                  src={imageUrl}
                  width={900}
                  height={700}
                  responsive={true}
                  alt={"hait-meme"}
                />
              )}
            </CardContent>
          </Card>
        </Box>
      ) : (
        <Box m="auto" bgcolor="background.default" height={100} sx={styles.box}>
          <Box
            sx={{
              "&:hover": {
                color: "#a72323",
              },
            }}
          >
            <UploadIcon />
            <Typography>{<Text tid="toupload" />}</Typography>
          </Box>
        </Box>
      )}
    </label>
  );
};

const styles = {
  cardMedia: { minHeight: { xs: "200px", md: "500px" } },
  textBox: { margin: "auto", position: "relative", width: "100%" },
  box: {
    textAlign: "center",
    xs: "center",
    border: "1px dashed #DE6161",
    color: "secondary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default ImageUploadInput;
