import { useState, useContext } from "react";
import { useAuthUser } from "next-firebase-auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { imageSchema, videoSchema } from "../Form/schema";
import Display from "./Display";

import { uploadFileToStorage } from "@/firebase/storage";
import { SnackbarContext } from "@/utils/snackbarContext";

const Generator = ({ video }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [radioValue, setRadioValue] = useState("english");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { handleOpenSnackbar } = useContext(SnackbarContext);
  const user = useAuthUser();
  const handleChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };

  const schema = video ? videoSchema : imageSchema;

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      topText: "",
      bottomText: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsButtonDisabled(true);
      data.authorId = user?.id;
      data.username = user?.displayName;
      await uploadFileToStorage({
        data,
        video,
        setProgress,
        reset,
        setIsButtonDisabled,
        handleOpenSnackbar,
      });
      setImageUrl();
    } catch (e) {
      handleOpenSnackbar("error", "Submit error. Try again later");
    }
  };
  const onError = (errors, e) => console.log(errors, e);

  const stopDefaults = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const dragEvents = {
    onDragOver: stopDefaults,
    onDrop: (e) => {
      stopDefaults(e);
      if (e.dataTransfer.files[0] && !isButtonDisabled) {
        setImageUrl(URL.createObjectURL(e.dataTransfer.files[0]));
        setValue("file", e.dataTransfer.files[0]);
      }
    },
  };

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setValue("file", event.target.files[0]);
    }
  };

  return (
    <Display
      handleChange={handleChange}
      dragEvents={dragEvents}
      imageUrl={imageUrl}
      isButtonDisabled={isButtonDisabled}
      setValue={setValue}
      control={control}
      register={register}
      progress={progress}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      watch={watch}
      errors={errors}
      handleChangeRadio={handleChangeRadio}
      radioValue={radioValue}
      onError={onError}
      video={video}
    />
  );
};

export default Generator;
