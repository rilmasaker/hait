import { useState, useMemo, useEffect } from "react";
import {
  FacebookShareButton,
  TelegramIcon,
  FacebookIcon,
  WhatsappIcon,
  ViberIcon,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useTheme } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import NoSsr from "@mui/material/NoSsr";

import { ShareIcon } from "@/components/Common/Icons";
const actions = (url) => [
  {
    icon: (
      <FacebookShareButton url={url}>
        <FacebookIcon size={45} round />
      </FacebookShareButton>
    ),
    name: "Facebook",
  },
  {
    icon: (
      <FacebookMessengerShareButton
        url={url}
        appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}
      >
        <FacebookMessengerIcon size={45} round />
      </FacebookMessengerShareButton>
    ),
    name: "Messenger",
  },
  {
    icon: (
      <WhatsappShareButton url={url} quote="super share">
        <WhatsappIcon size={45} round />
      </WhatsappShareButton>
    ),
    name: "WhatsApp",
  },
  {
    icon: (
      <TelegramShareButton url={url} quote="super share">
        <TelegramIcon size={45} round />
      </TelegramShareButton>
    ),
    name: "Telegram",
  },
  {
    icon: (
      <ViberShareButton url={url} quote="super share">
        <ViberIcon size={45} round />
      </ViberShareButton>
    ),
    name: "Viber",
  },
];
const ShareButton = ({ url }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const memoizedAction = useMemo(() => {
    return actions(url);
  }, [url]);

  return (
    <NoSsr>
      <Box
        sx={styles.box}
        color={theme.palette.mode === "light" ? " grey" : "black"}
      >
        <Backdrop sx={styles.backDrop} open={open} />
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={styles.speedDial}
          FabProps={{
            sx: styles.fab,
          }}
          icon={<ShareIcon />}
          direction="up"
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {memoizedAction.map((action, i) => (
            <SpeedDialAction
              key={action.name + i}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
              FabProps={{ sx: styles.fabAction }}
              open={open}
            />
          ))}
        </SpeedDial>
      </Box>
    </NoSsr>
  );
};

const styles = {
  speedDial: {
    position: "absolute",
    bottom: -22,
    right: 0,
  },
  backDrop: { zIndex: 99999 },
  box: { transform: "translateZ(0px)", flexGrow: 1, marginTop: "10px" },
  fab: {
    boxShadow: "none",
    background: "none",
    "&:hover": {
      background: "none",
    },
  },
};

export default ShareButton;
