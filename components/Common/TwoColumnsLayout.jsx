import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const TwoColumnsLayout = ({ mainComponent, sideComponent }) => {
  return (
    <Box sx={styles.box}>
      <Grid container spacing={6}>
        <Grid item xs={12} xl={9}>
          {mainComponent}
        </Grid>
        <Grid item xs={0} xl={3} sx={styles.rightSide}>
          <Box sx={styles.position}>{sideComponent}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  position: { position: "sticky", top: "1rem" },
  box: {
    flexGrow: 1,
    mt: 1,
    mr: { lg: 20, md: 10, sm: 5, xs: 1 },
    ml: { lg: 10, md: 10, sm: 5, xs: 1 },
    display: "flex",
  },
  rightSide: {
    display: {
      xs: "none",
      xl: "block",
    },
  },
};

export default TwoColumnsLayout;
