import { useMemo, useState, useEffect } from "react";

import { CacheProvider } from "@emotion/react";
import Head from "next/head";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import createEmotionCache from "@/utils/createEmotionCache";
import ColorModeContext from "@/utils/modeContext";
import { LanguageProvider } from "@/utils/Languages";
import haitTheme from "@/utils/theme";
import HaitSnackbar from "@/components/Common/HaitSnackbar";
import { SnackbarProvider } from "@/utils/snackbarContext";
import initAuth from "@/firebase/auth";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const MyApp = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const [mode, setMode] = useState(prefersDarkMode);

  useEffect(() => {
    const defaultMode = localStorage.getItem("mode") || "dark";
    setMode(defaultMode);
    initAuth();
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = createTheme({
    ...haitTheme(mode),
    palette: {
      ...haitTheme(mode).palette,
      mode,
    },
  });

  return (
    <CacheProvider value={emotionCache}>
      <LanguageProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Nepali memes</title>
        </Head>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <Component {...pageProps} />
              <HaitSnackbar />
            </SnackbarProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </LanguageProvider>
    </CacheProvider>
  );
};

export default MyApp;
