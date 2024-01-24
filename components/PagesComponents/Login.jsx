import { useState, useContext } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";

import { SnackbarContext } from "@/utils/snackbarContext";
import { Text } from "@/utils/Languages";
import { EmailIcon, FacebookIcon, GoogleIcon } from "../Common/Icons";
import { loginSchema } from "../Form/schema";

import Link from "../Common/Link";
import {
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
} from "@/firebase/auth/authProviders";

const Login = () => {
  const theme = useTheme();
  const router = useRouter();
  const [isEmail, setIsEmail] = useState(false);
  const { handleOpenSnackbar } = useContext(SnackbarContext);
  const [value, setRadioValue] = useState("signUp");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const signUpWithGoogle = () => loginWithGoogle(router);
  const signUpWithFacebook = () => loginWithFacebook(router);
  const toggleEmailLogin = () => setIsEmail(!isEmail);

  const onSubmit = async (data) => {
    const { email, password } = data;
    loginWithEmail({
      email,
      password,
      router,
      handleOpenSnackbar,
      type: value,
    });
  };
  const onError = (errors, e) => {};
  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.box}>
        <Typography
          variant="h4"
          color={theme.palette.mode === "light" ? "black" : "white"}
          sx={styles.logo}
        >
          HAIT
        </Typography>
        <Typography variant="paragrap" sx={styles.terms}>
          {<Text tid="trems" />}
          <Link href="/policy">Privacy Policy</Link>
        </Typography>
        <Box sx={styles.Box}>
          {!isEmail ? (
            <>
              {" "}
              <Tooltip title={<Text tid="temporaryBlocked" />} placement="top">
                <div>
                  <Button
                    variant="outlined"
                    component="div"
                    sx={styles.buttonFacebook}
                    onClick={signUpWithFacebook}
                    disabled
                  >
                    <FacebookIcon />
                    <Typography variant="paragraph" sx={styles.flexGrow}>
                      <Text tid="facebook" />
                    </Typography>
                  </Button>
                </div>
              </Tooltip>
              <Button
                variant="outlined"
                sx={styles.buttonGoogle}
                onClick={signUpWithGoogle}
              >
                <GoogleIcon />
                <Typography variant="paragraph" sx={styles.flexGrow}>
                  <Text tid="google" />
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={styles.emailButton}
                onClick={toggleEmailLogin}
              >
                <EmailIcon />
                <Typography variant="paragraph" sx={styles.flexGrow}>
                  <Text tid="email" />
                </Typography>
              </Button>{" "}
            </>
          ) : (
            <>
              <TextField
                {...register("email")}
                helperText={errors?.email ? errors.email.message : null}
                error={!!errors?.email}
                sx={{ mt: 2 }}
                label={"Email"}
                variant="outlined"
                size="small"
              />
              <TextField
                {...register("password")}
                helperText={errors?.password ? errors.password.message : null}
                sx={styles.password}
                error={!!errors?.password}
                label={"Password"}
                variant="outlined"
                type="password"
                size="small"
              />
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="login"
                  control={<Radio />}
                  label="Login"
                />
                <FormControlLabel
                  value="signUp"
                  control={<Radio />}
                  label="Sign Up"
                />
              </RadioGroup>
              <Box sx={styles.emailButtonBox}>
                <Button
                  sx={styles.button}
                  // disabled={isButtonDisabled}
                  onClick={toggleEmailLogin}
                >
                  {<Text tid="back" />}
                </Button>
                <Button
                  sx={styles.button}
                  // disabled={isButtonDisabled}
                  onClick={handleSubmit(onSubmit, onError)}
                >
                  {<Text tid="submit" />}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

const styles = {
  flexGrow: { flexGrow: 2 },
  Box: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    minHeight: "250px",
    maxWidth: "300px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
  },
  paper: {
    height: "370px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    m: 1,
  },
  logo: { fontFamily: "Road Rage", fontSize: "50px", flexGrow: 1 },
  login: {
    marginTop: 2,
  },
  terms: {
    fontSize: "9px",
    lineHeight: "11px",
    textAlign: "center",
    width: "276px",
  },
  buttonFacebook: {
    border: "3px solid #525AC9",
    marginTop: 1,
    display: "flex",
    paddingLeft: 0,
    "&:hover": {
      border: "1px solid #525AC9",
    },
  },
  buttonGoogle: {
    color: "secondary.main",
    border: "3px solid #DE6161",
    display: "flex",
    paddingLeft: 0,
    "&:hover": {
      border: "1px solid #DE6161",
    },
  },
  emailButton: {
    color: "#656565",
    border: "3px solid #656565",
    paddingLeft: 0,
    display: "flex",
    "&:hover": {
      border: "1px solid #656565",
    },
  },
  member: {
    fontSize: "14px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    borderRadius: "8px",
    color: "white",
    height: "34px",
    mb: 3,
    textTransform: "none",
  },
  emailButtonBox: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  password: {
    marginTop: 1,
  },
};

export default Login;
