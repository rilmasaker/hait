import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { blue } from "@mui/material/colors";

const MemeCard = ({ src, video }) => {
  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardContent sx={styles.p}>
          <CardMedia
            component={video ? "video" : "img"}
            controls
            height="200"
            src={src}
            sx={styles.cardMedia}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

const styles = {
  p: { p: 0 },
  box: {
    display: "flex",
    justifyContent: "center",
    postion: "fixed",
    mt: 2,
    mb: 2,
  },
  cardHeader: {
    fontSize: "8px",
    "> div > span": {
      fontSize: "8px",
      color: "#656565",
    },
  },
  card: { width: "100%", borderRadius: "8px" },
  cardMedia: { width: "100%", borderRadius: "8px" },
  cardAvatar: {
    bgcolor: blue[500],
    height: "16px",
    width: "16px",
    fontSize: "8px",
  },
  cardActions: { display: "flex", justifyContent: "space-between", pb: 0 },
};

export default MemeCard;
