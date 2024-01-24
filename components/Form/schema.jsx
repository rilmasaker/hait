import { array, mixed, object, string } from "yup";

const isImageType = (type) => type.includes("image");

const isVideoType = (type) => type.includes("video");

const imageSchema = object().shape({
  file: mixed()
    .test("required", "You need to provide a file", (value) => {
      return value?.name && value?.size;
    })
    .test("fileSize", "The file is too large", (value) => {
      return value?.name && value.size <= 500000;
      // 0.5 mb
    })
    .test("type", "Unsupported file extension", function (value) {
      return value.name && isImageType(value.type);
    }),
  topText: string(),
  bottomText: string(),
  tags: array()
    .of(string())
    .max(4, "Maximum 4 tags")
    .required("Add minimum 1 tag"),
  category: string().required("Category is required"),
});

const videoSchema = object().shape({
  file: mixed()
    .test("required", "You need to provide a file", (value) => {
      return value?.name && value?.size;
    })
    .test("fileSize", "The file is too large.Limit 10mb", (value) => {
      // 10mb
      return value?.name && value.size <= 10000000;
    })
    .test("type", "Unsupported file extension", function (value) {
      return value.name && isVideoType(value.type);
    }),
  topText: string(),
  bottomText: string(),
  tags: array()
    .of(string())
    .max(4, "Maximum 4 tags")
    .required("Add minimum 1 tag"),
  category: string().required("Category is required"),
});

const userSchema = object().shape({
  photoURL: mixed()
    .test("fileSize", "The file is too large. Limit 1mb", (value) => {
      // 1mb
      if (value?.name) {
        return value?.name && value.size <= 1000000;
      }
      return true;
    })
    .test("type", "Unsupported file extension", function (value) {
      if (value?.name) {
        return value.name && isImageType(value.type);
      }
      return true;
    }),
  displayName: string(),
  secondemail: string(),
});

const loginSchema = object().shape({
  email: string().email().required("Email is required"),
  password: string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export { imageSchema, loginSchema, videoSchema, userSchema };
