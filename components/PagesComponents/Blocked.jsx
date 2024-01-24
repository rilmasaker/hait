import React from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

const Blocked = ({ reason = "policy" }) => {
  return (
    <>
      <Box sx={styles.box}>
        <Image
          alt="Offline page"
          src="/mountains.png"
          width={1400}
          height={450}
        />

        <Typography variant="h4" sx={styles.title}>
          You are Blocked
        </Typography>
        <Typography sx={styles.text} align="center">
          {reason === "porn"
            ? "You have been blocked because of adding pornographic content"
            : reason === "offense"
            ? "You have been blocked for adding offensive content"
            : "You have been blocked due to adding content inconsistent with the site's policy"}
        </Typography>
        <Button onClick={signOut} sx={styles.button}>
          <Typography> Go to Homepage </Typography>
        </Button>
      </Box>
    </>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    m: { xs: 4 },
  },
  button: {
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    color: "white",
    height: "40px",
    borderRadius: "8px",
    textTransform: "none",
    mb: 3,
    m: 4,
  },
  text: { fontSize: { xs: "10px", sm: "20px" } },
  title: {
    mb: 1,
    mt: 2,
    fontSize: { xs: "15px", sm: "30px", lg: "40px" },
  },
};

export default Blocked;
