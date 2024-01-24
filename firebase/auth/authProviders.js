import domains from "disposable-email-domains";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../client";
import {
  createEmailUser,
  createFacebookUser,
  createGoogleUser,
} from "../write/users";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const loginWithGoogle = (router) => {
  signInWithPopup(auth, googleProvider)
    .then((response) => {
      createGoogleUser(response.user);
      router.replace("/");
    })
    .catch((e) => {});
};

export const loginWithFacebook = (router) => {
  signInWithPopup(auth, facebookProvider)
    .then((response) => {
      createFacebookUser(response.user);
      router.replace("/");
    })
    .catch((e) => {});
};

export const loginWithEmail = ({
  email,
  password,
  router,
  handleOpenSnackbar,
  type,
}) => {
  const domain = email.substring(email.lastIndexOf("@") + 1);
  if (domains.includes(domain)) {
    handleOpenSnackbar("error", "Disposable email");
    return;
  }
  if (type === "login") {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.replace("/");
      })
      .catch((error) => {
        handleOpenSnackbar("error", error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createEmailUser(user);
        router.replace("/");
      })
      .catch((error) => {
        handleOpenSnackbar("error", error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
};
