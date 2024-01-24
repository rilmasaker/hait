import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

const HaitSkeleton = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, mt: 1 }}
      >
        <Skeleton variant="circular">
          <Avatar />
        </Skeleton>
        <Skeleton width="80%"></Skeleton>
      </Box>
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </Box>
  );
};

export default HaitSkeleton;
