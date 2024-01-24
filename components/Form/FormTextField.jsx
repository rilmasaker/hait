import React from "react";
import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

import NepaliTextInput from "../Common/NepaliInput";

const FormTextField = ({ control, disabled, isNepali, label, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) =>
        isNepali ? (
          <NepaliTextInput
            helperText={error ? error.message : null}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            disabled={disabled}
            isNepali
          />
        ) : (
          <TextField
            helperText={error ? error.message : null}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
            disabled={disabled}
          />
        )
      }
    />
  );
};

export default FormTextField;
