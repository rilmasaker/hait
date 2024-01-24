import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Pagination = ({ isStart, isEnd, getPrev, getNext }) => {
  return (
    <Box sx={styles.box}>
      <Button sx={styles.button} onClick={getPrev} disabled={isStart}>
        &#11013; &#160; Prev
      </Button>
      <Button sx={styles.button} onClick={getNext} disabled={isEnd}>
        Next &#160; &#10145;
      </Button>
    </Box>
  );
};

const styles = {
  button: {
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    color: "white",
    height: "40px",
    borderRadius: "8px",
    textTransform: "none",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    m: { xs: 4, sm: 4 },
  },
};

export default Pagination;
