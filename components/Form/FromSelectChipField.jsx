import * as React from "react";

import { Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

import { tags } from "./const";

export default function FromSelectChipField({
  control,
  disabled,
  label,
  name,
}) {
  return (
    <Controller
      render={({ field: { onChange, value = [] }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error?.message}>
          <InputLabel id="tags-label">{label}</InputLabel>
          <Select
            labelId="tags-label"
            error={!!error}
            multiple
            value={value}
            onChange={onChange}
            disabled={disabled}
            input={<OutlinedInput id="select-multiple-chip" label={label} />}
            renderValue={(selected) => (
              <Box sx={styles.box}>
                {selected.map((select) => (
                  <Chip key={select} label={select} sx={styles.color} />
                ))}
              </Box>
            )}
          >
            {tags.map((tag, i) => (
              <MenuItem key={tag + i} value={tag}>
                <Checkbox checked={value?.indexOf(tag) > -1} />
                {tag}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
      control={control}
      name={name}
    />
  );
}

const styles = {
  box: { color: "#556cd6" },
  color: {
    color: "white",
    background: "linear-gradient(53.04deg, #DE6161 3.76%, #525AC9 112.13%)",
  },
};
