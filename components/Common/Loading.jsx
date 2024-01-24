import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress size={120} sx={styles.color} />
    </Box>
  );
};

const styles = {
  color: { color: "#556cd6" },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
};

export default Loading;
