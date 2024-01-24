import { useAuthUser } from "next-firebase-auth";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import { Text } from "@/utils/Languages";
import FormTextField from "../Form/FormTextField";
import { userSchema } from "../Form/schema";
import ImageUploadInput from "../MemeGenerator/ImageUploadInput";
import { SnackbarContext } from "@/utils/snackbarContext";
import { uploadAvatarToStorage } from "@/firebase/storage";
import { deleteUser } from "@/firebase/write/users";
import Link from "../Common/Link";

const UserSettings = () => {
  const { handleOpenSnackbar } = useContext(SnackbarContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const user = useAuthUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const [imageUrl, setImageUrl] = useState(user?.photoURL);
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      displayName: user?.displayName,
      secondemail: "",
      photoURL: user?.photoURL,
    },
  });

  const stopDefaults = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleClickPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const poperid = open ? "simple-popper" : undefined;

  const dragEvents = {
    onDragOver: stopDefaults,
    onDrop: (e) => {
      stopDefaults(e);
      if (e.dataTransfer.files[0] && !isButtonDisabled) {
        setImageUrl(URL.createObjectURL(e.dataTransfer.files[0]));
        setValue("photoURL", e.dataTransfer.files[0]);
      }
    },
  };

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setValue("photoURL", event.target.files[0]);
    }
  };

  const handleDeleteUser = async () => {
    await deleteUser(user?.id);

    handleClickPopper();
  };
  const onSubmit = async (data) => {
    data.id = user?.id;
    setIsButtonDisabled(true);
    uploadAvatarToStorage({
      data,
      handleOpenSnackbar,
      reset,
      setIsButtonDisabled,
    });
  };
  const onError = (errors, e) => {};

  //   useEffect(() => {
  //     const fetchImage = async () => {
  //       if (user?.image) {
  //         await fetch(user?.image).then((r) => {
  //           r.blob().then((blobFile) => {
  //             const file = new File([blobFile], "userImage", {
  //               type: blobFile.type,
  //             });

  //             setValue("image", file);
  //             setImageUrl(URL.createObjectURL(file));
  //           });
  //         });
  //       }
  //     };

  //     fetchImage();
  //   }, []);

  return (
    <Paper sx={{ m: 2 }}>
      <Box sx={styles.box}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            mt: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography sx={{ mr: 2, fontWeight: 600 }}>Avatar</Typography>
            <ImageUploadInput
              dragEvents={dragEvents}
              imageUrl={imageUrl}
              avatar
            />
          </Box>
          {errors.photoURL && (
            <Typography
              align="left"
              variant="body2"
              component="div"
              color="error"
              sx={styles.textBottom}
            >
              {errors.photoURL.message}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xs: 2, sm: 0 },
              justifyContent: "space-between",
            }}
          >
            <Button sx={styles.button} onClick={user?.signOut}>
              {<Text tid="logout" />}
            </Button>
            <Button sx={styles.button} onClick={handleClickPopper}>
              Delete account{" "}
            </Button>
            <Popper id={poperid} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  border: 1,
                  p: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-between",

                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                }}
              >
                <Typography>Are you sure delete you account?</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteUser}
                  >
                    Yes, delete{" "}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickPopper}
                  >
                    Don&apos;t delete{" "}
                  </Button>
                </Box>
              </Box>
            </Popper>
            <Button sx={styles.button} href="/policy" component={Link}>
              Policy
            </Button>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormTextField
            name="displayName"
            label={<Text tid="displayname" />}
            control={control}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormTextField
            name="secondemail"
            label={<Text tid="secondemail" />}
            control={control}
          />
          <input
            {...register("photoURL")}
            onChange={handleChange}
            accept={"image/*"}
            id="file-upload"
            type="file"
            style={{ display: "none" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Email: <Typography>{user?.email}</Typography>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Name: <Typography>{user?.username}</Typography>
          </Typography>
        </Box>
        <Button
          sx={styles.button}
          disabled={isButtonDisabled}
          onClick={handleSubmit(onSubmit, onError)}
        >
          {<Text tid="submit" />}
        </Button>
      </Box>
    </Paper>
  );
};

const styles = {
  box: { display: "flex", flexDirection: "column", m: 2 },
  button: {
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    borderRadius: "8px",
    color: "white",
    height: "34px",
    mb: 3,
    textTransform: "none",
  },
};

export default UserSettings;
