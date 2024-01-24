import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const OfflinePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: { xs: 4 },
      }}
    >
      <Image
        alt="Offline page"
        src="/mountains.png"
        width={1400}
        height={450}
      />

      <Typography
        variant="h4"
        sx={{
          mb: 1,
          mt: 2,
          fontSize: { xs: "15px", sm: "30px", lg: "40px" },
        }}
      >
        You are offline
      </Typography>
      <Typography> Please connet to the internet </Typography>
    </Box>
  );
};

export default OfflinePage;
