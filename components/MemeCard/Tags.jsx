import React from "react";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

const styles = {
  links: {
    fontFamily: "Noto Sans",
    color: "inherit",
    display: "inline-block",
    fontSize: "10px",
    p: 0,
    pr: 1,
  },
  box: {
    pl: 2,
    whiteSpace: "pre-line",
    pb: 1,
  },
};
const Tags = ({ tags = [] }) => {
  return (
    <Box sx={styles.box}>
      {tags.map((tag, i) => (
        <Typography key={tag + i} color="inherit" sx={styles.links}>
          #{tag}
        </Typography>
      ))}
    </Box>
  );
};

export default Tags;
