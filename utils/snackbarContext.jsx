import { useState, createContext } from "react";

export const SnackbarContext = createContext({
  open: false,
  variant: "success",
});

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("success");
  const [message, setMessage] = useState("success");

  const handleOpen = (v, text) => {
    setOpen(true);
    setVariant(v);
    setMessage(text);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const provider = {
    open,
    handleOpenSnackbar: (v, text) => handleOpen(v, text),
    handleClose,
    message,
    variant,
  };

  return (
    <SnackbarContext.Provider value={provider}>
      {children}
    </SnackbarContext.Provider>
  );
};
