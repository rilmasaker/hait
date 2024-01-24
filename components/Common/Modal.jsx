import * as React from "react";
import Modal from "@mui/material/Modal";
import { styled, Box } from "@mui/system";

const Backdrop = styled("div")`
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

const style = {
  bgcolor: "background.paper",
  border: "2px solid #000",
  width: "100%",
  p: 2,
  px: 4,
  pb: 3,
};

const ModalComponent = ({ open, onClose, component: Component }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ pt: 4 }}
      BackdropComponent={Backdrop}
    >
      <Box sx={styles.box}>
        <Component />
      </Box>
    </Modal>
  );
};

const styles = {
  box: {
    height: "380px",
    width: "660px",
    position: "absolute",
    top: "50%",
    left: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
export default ModalComponent;
