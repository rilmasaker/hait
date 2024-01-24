import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { updateUser } from "./write/users";
import { addMeme } from "./write/memes";
import { storage } from "./client";

export const uploadFileToStorage = async ({
  data,
  video = false,
  setProgress,
  reset,
  setIsButtonDisabled,
  handleOpenSnackbar,
}) => {
  const { file, ...restData } = data || {};
  const randomNumber = Math.floor(Math.random() * 1000 + 1);
  const storageRef = ref(
    storage,
    (video ? "video/" : "image/") + randomNumber + file.name
  );
  const upload = uploadBytesResumable(storageRef, file);

  upload.on(
    "state_change",
    (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    (err) => {
      handleOpenSnackbar("error", "Upload error. Try again later");
    },
    () => {
      getDownloadURL(upload.snapshot.ref)
        .then((downloadURL) => {
          restData.src = downloadURL;
          restData.video = video;
          restData.fileName = randomNumber + file.name;
          restData.isAprooved = null;
          addMeme(restData).catch((e) => console.log(e));
          reset();
          setIsButtonDisabled(false);
          setProgress(0);
          handleOpenSnackbar(
            "success",
            "File Uploaded to our storage successfully!"
          );
        })
        .catch((e) => {
          handleOpenSnackbar("error", "Upload error. Try again later");
        });
    }
  );
};

export const uploadAvatarToStorage = async ({
  data,
  reset,
  setIsButtonDisabled,
  handleOpenSnackbar,
}) => {
  const { photoURL, ...restData } = data || {};
  if (photoURL?.name) {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    const storageRef = ref(storage, "image/" + randomNumber + photoURL.name);
    const upload = uploadBytesResumable(storageRef, photoURL);

    upload.on(
      "state_change",
      (snapshot) => {},
      (err) => {
        handleOpenSnackbar("error", "Upload error. Try again later");
      },
      () => {
        getDownloadURL(upload.snapshot.ref)
          .then((downloadURL) => {
            restData.photoURL = downloadURL;

            updateUser(restData);
            reset();
            setIsButtonDisabled(false);
            handleOpenSnackbar("success", "Account updated successfully!");
          })
          .catch((e) => {
            handleOpenSnackbar("error", "Upload error. Try again later");
          });
      }
    );
  } else {
    updateUser(restData);
    reset();
    setIsButtonDisabled(false);
    handleOpenSnackbar("success", "Account updated successfully!");
  }
};
