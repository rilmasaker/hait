import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { Text } from "@/utils/Languages";
import LanguageRadio from "./LanguageRadio";
import ImageUploadInput from "./ImageUploadInput";
import InputSection from "./InputSection";

const Display = ({
  control,
  dragEvents,
  errors,
  handleChange,
  handleSubmit,
  handleChangeRadio,
  imageUrl,
  isButtonDisabled,
  onSubmit,
  onError,
  progress,
  radioValue,
  register,
  watch,
  video,
}) => {
  return (
    <Paper sx={styles.paper}>
      <Box>
        <Typography variant="h5" component="div" sx={styles.mb}>
          {<Text tid="create" />}
        </Typography>
        <Typography variant="p" component="div" sx={styles.mb}>
          {<Text tid="photoupload" />}
        </Typography>
        <Typography
          align="center"
          variant="h4"
          component="div"
          sx={styles.textTop}
        >
          {watch("topText")}
        </Typography>
        <input
          {...register("file")}
          onChange={handleChange}
          accept={`${video ? "video" : "image"}/*`}
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          disabled={isButtonDisabled}
        />
        <ImageUploadInput
          dragEvents={dragEvents}
          imageUrl={imageUrl}
          errors={errors}
          video={video}
        />
        {errors.file && (
          <Typography
            align="left"
            variant="body2"
            component="div"
            color="error"
            sx={styles.textBottom}
          >
            {errors.file.message}
          </Typography>
        )}

        <Typography
          align="center"
          variant="h4"
          component="div"
          sx={styles.textBottom}
        >
          {watch("bottomText")}
        </Typography>
        <Box sx={{ width: "100%", mt: 2 }}>
          {" "}
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <LanguageRadio
          radioValue={radioValue}
          handleChangeRadio={handleChangeRadio}
        />
      </Box>

      <InputSection
        radioValue={radioValue}
        imageUrl={imageUrl}
        control={control}
      />

      <Box sx={styles.box}>
        <Button
          sx={styles.button}
          onClick={handleSubmit(onSubmit, onError)}
          disabled={isButtonDisabled || !imageUrl}
        >
          {<Text tid="submit" />}
        </Button>
      </Box>
    </Paper>
  );
};

const styles = {
  textBottom: {
    mt: 2,
    wordBreak: "keep-all",
    fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "35px" },
  },
  textTop: {
    mb: 2,
    wordBreak: "keep-all",
    fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "35px" },
  },
  mb: { mb: 2 },
  mb: { mb: 4 },
  button: {
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
    borderRadius: "8px",
    color: "white",
    height: "34px",
    mb: 3,
    textTransform: "none",
  },
  paper: {
    borderRadius: "10px",
    p: 3,
  },
  box: { display: "flex", justifyContent: "flex-end", mt: 4 },
};

export default Display;
