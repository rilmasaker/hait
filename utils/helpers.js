export const admins = [
  "u6QfZPiQl6PRFzcnc1fukEgTtAN2",
  "dwLXoFrUjjQcHZMw2a6YnS10Iez2",
  "jDNIaXmYzCga0AHh7YROmCzhGDY2",
  "vXPCs9aPoSPFXYA3kLLcDlNbOIv1",
  "76bDxP7yLqf6UbS5yNGZOwzv3cO2",
  "UwFFYzLmnxeIc9CYGLymFEuBPP93",
  "E9BOKbVoqwVygaWN174mmJhsaFE2",
  "Hj4pkiYEaMMv0Zj4xJk2L5b7J6p1",
  "Ipm98gBKYmR00WM9gZVZaJq5ZcD3",
  //from test db
  "nsXnUSPZKxh1aO00FybLJ5RhMqH2",
];

export const capitalizeFirstLetter = (string = "") => {
  const newString =
    string === "solomonsVestibule"
      ? "Solomons Vestibule"
      : string === "[id]"
      ? "Selected"
      : string;
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};

export const isAdmin = (userId) => {
  return admins.includes(userId);
};
