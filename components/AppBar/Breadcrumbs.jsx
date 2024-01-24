import { useMemo } from "react";
import { useRouter } from "next/router";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { capitalizeFirstLetter } from "@/utils/helpers";

import Link from "../Common/Link";
import {
  ArrowBackIcon,
  HomeIconCrumbs,
  NavigateNextIcon,
} from "../Common/Icons";

const Crumbs = ({ mode }) => {
  const router = useRouter();
  const pathnamesArray = router?.pathname?.split("/").filter(Boolean) || [];
  const route = pathnamesArray[pathnamesArray.length - 1];
  const color = useMemo(() => {
    return mode === "light" ? "black" : "white";
  }, [mode]);

  return (
    <Box sx={styles.margin}>
      <Button
        startIcon={
          !route ? (
            <HomeIconCrumbs color={color} />
          ) : (
            <ArrowBackIcon color={color} />
          )
        }
        sx={{
          color: "text.primary",
          textTransform: "none",
          height: "34px",
          fontSize: "16px",
          mt: 1,
          mb: 1,
          ml: 1,

          "&:hover": {
            backgroundColor:
              mode === "light" ? "secondary.main" : "primary.main",
          },
        }}
        onClick={() => (route ? router.back() : {})}
      >
        {!route ? "Homepage" : capitalizeFirstLetter(route)}
      </Button>
      <Divider />
      <Breadcrumbs
        separator={<NavigateNextIcon color={color} />}
        sx={styles.breadcrumbs}
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="/" sx={styles.link}>
          <NavigateNextIcon color={color} />
          Homepage
        </Link>

        {pathnamesArray.map((path, i, arr) =>
          arr.length - 1 !== i ? (
            <Link
              underline="hover"
              color="inherit"
              key={path}
              href={`/${path}`}
            >
              {capitalizeFirstLetter(path)}
            </Link>
          ) : (
            <p key={path}>{capitalizeFirstLetter(path)}</p>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

const styles = {
  margin: {
    mt: 1,
    mb: 1,
  },
  breadcrumbs: {
    marginTop: "10px",
    fontSize: "10px",
    marginLeft: 1,
  },
  link: { display: "flex", alignItems: "center" },
};

export default Crumbs;
