import { Controller } from "react-hook-form";

import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

import { categories } from "./const";

const FormSelectField = ({ control, disabled, name, label }) => {
  return (
    <Controller
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error?.message}>
          <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={value}
            onChange={onChange}
            input={<OutlinedInput label={label} />}
            renderValue={(selected) => selected}
            disabled={disabled}
          >
            {categories.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={value?.indexOf(name) > -1} />
                <ListItemText primary={name} />
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
};

export default FormSelectField;
