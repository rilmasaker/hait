import { keyframes } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const spin = keyframes`
0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(370deg);
  }
  35% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spin2 = keyframes`
0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-180deg);
  }
  35% {
    transform: rotate(-190deg);
  }
  40% {
    transform: rotate(-180deg);
  }
  78% {
    transform: rotate(-180deg);
  }
  95% {
    transform: rotate(-360deg);
  }
  98% {
    transform: rotate(-370deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const spin3 = keyframes`
0% {
    transform: rotate(0deg);
  }
  27% {
    transform: rotate(0deg);  
  }
  40% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  80% {
    transform: rotate(370deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spin4 = keyframes`
0% {
    transform: rotate(0deg);
  }
  38% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-360deg);
  }
  65% {
    transform: rotate(-370deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Loader = () => {
  return (
    <Box sx={styles.box}>
      <Box sx={styles.container}>
        <Box sx={{ ...styles.dash, ...styles.uno }}>H</Box>
        <Box sx={{ ...styles.dash, ...styles.dos }}>A</Box>
        <Box sx={{ ...styles.dash, ...styles.tres }}>I</Box>
        <Box sx={{ ...styles.dash, ...styles.cuatro }}>T</Box>
      </Box>
      <Typography> Loading</Typography>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    display: "flex",
    mb: 4,
  },

  dash: {
    margin: "0 15px",
    display: "flex",
    width: "65px",
    borderRadius: "8px",
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    boxShadow: " 0 0 10px 0 #FECDFF",
    color: "white",
    fontFamily: "Road Rage",
    fontSize: "50px",
    alignItems: "center",
    justifyContent: "center",
    height: "45px",
  },

  uno: {
    marginRight: "-48px",
    transformOrigin: "center left",
    animation: `${spin} 3s linear infinite`,
  },

  dos: {
    transformOrigin: "center right",
    animation: `${spin2} 3s linear infinite`,
    animationDelay: ".2s",
  },

  tres: {
    transformOrigin: "center right",
    animation: `${spin3} 3s linear infinite`,
    animationDelay: ".3s",
  },

  cuatro: {
    transformOrigin: "center right",
    animation: `${spin4} 3s linear infinite`,
    animationDelay: ".4s",
  },
};

export default Loader;
