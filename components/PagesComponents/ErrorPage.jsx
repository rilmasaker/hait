import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../Common/Link";

const Error = () => {
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
          Somethnig went wrong
        </Typography>
        <Typography sx={styles.text} align="center">
          Go back to main page or check our meme creator{""}
          <Link sx={{ m: 1 }} href="/create">
            meme creator.
          </Link>
        </Typography>
        <Button href="/" component={Link} sx={styles.button}>
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

export default Error;
