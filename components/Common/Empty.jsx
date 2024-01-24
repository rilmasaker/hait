import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Epmty = () => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h3">No results.</Typography>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Epmty;
