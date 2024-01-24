import { red } from "@mui/material/colors";

const haitTheme = (mode) => ({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "#fff",
          background: "linear-gradient(90deg, #DE6161 -5.42%, #2657EB 116.39%)",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: "#FCFCFC",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
          borderRadius: "8px",
          color: "black",
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "16px",
          height: "16px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Noto Sans , sans-serif",
  },
  palette: {
    mode,
    primary: {
      main: "#525AC9",
    },
    neutral: {
      main: "#525AC9",
    },
    secondary: {
      main: "#DE6161",
    },
    error: {
      main: red.A400,
    },
    icon: {
      main: "#525AC9",
    },
    rating: {
      main: "#656565",
    },
    background: {
      default: "#E5E5E5",
    },
  },
  ...(mode === "dark"
    ? {
        components: {
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: "#fff",
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                color: "#fff",
                background:
                  "linear-gradient(90deg, #DE6161 -5.42%, #2657EB 116.39%)",
              },
            },
          },
          MuiSnackbarContent: {
            styleOverrides: {
              root: {
                background: "#332A46",
                boxShadow:
                  "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
                borderRadius: "8px",
                color: "white",
              },
            },
          },
        },

        palette: {
          mode,
          primary: {
            main: "#525AC9",
          },
          secondary: {
            main: "#DE6161",
          },
          icon: {
            main: "#DE6161",
          },
          rating: {
            main: "white",
          },
          background: {
            default: "#1F1532",
            paper: "#332A46",
          },
        },
      }
    : {}),
});

export default haitTheme;
