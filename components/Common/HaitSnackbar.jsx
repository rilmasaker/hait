import { useMemo, useContext } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import Typography from "@mui/material/Typography";

import { CheckIcon, CloseIcon, ErrorIcon, InfoIcon } from "./Icons";
import { SnackbarContext } from "@/utils/snackbarContext";

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

const Message = (variant, message) => (
  <Box
    sx={{
      minHeight: "40px",
      maxWidth: "400px",
      borderLeft: `2px solid ${
        variant === "success"
          ? "#19C52A"
          : variant == "error"
          ? "#D41117"
          : "#525AC9"
      }`,
      p: 0,
      ml: 1,
      display: "flex",
      alignItems: "center",
    }}
  >
    <Box sx={{ flexGrow: 1, ml: 1, mr: 1 }}>
      {variant === "success" ? (
        <CheckIcon />
      ) : variant == "error" ? (
        <ErrorIcon />
      ) : (
        <InfoIcon />
      )}
    </Box>
    <Box sx={{ flexGrow: 2 }}>
      <Typography component="p" sx={{ fontWeight: 600, fontSize: "14px" }}>
        {variant === "success"
          ? "Success!"
          : variant === "Error!"
          ? "Somethink went wrong"
          : "Info"}
      </Typography>
      <Typography
        sx={{ fontSize: "14px", wordBreak: "break-all" }}
        component="p"
      >
        {message}
      </Typography>
    </Box>
  </Box>
);

const HaitSnackbar = () => {
  const {
    handleClose,
    open,
    message = "Your operation was successfull",
    variant = "success",
  } = useContext(SnackbarContext);

  const MessageComponent = useMemo(() => {
    return Message(variant, message);
  }, [variant, message]);

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
      sx={{ mr: 1 }}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
    >
      <SnackbarContent
        sx={{ p: 0 }}
        message={MessageComponent}
        action={action}
      ></SnackbarContent>
    </Snackbar>
  );
};
export default HaitSnackbar;
