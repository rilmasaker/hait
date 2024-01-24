import { useState } from "react";

import TextField from "@mui/material/TextField";

import { mappingFunction } from "@/utils/nepali";

const KEYCODE = {
  START_ASCII_CODE: 32,
  END_ASCII_CODE: 125,
};

export const NepaliTextInput = ({
  disabled,
  error,
  isNepali,
  label,
  onChange,
}) => {
  const [myValue, setMyValue] = useState("");
  const handleChange = (event) => {
    const val = event.target.value;
    setMyValue(val);
    onChange && isNepali ? onChange(val) : onChange(event);
  };
  const adjustCursor = (event) => {
    const target = event.target;
    const selectionStart = target.selectionStart;

    setTimeout(() => {
      target.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }, 10);
  };
  const calculate = (event) => {
    event.persist();
    const keyCode = event.key.length === 1 ? event.key.charCodeAt(0) : -1;
    const target = event.target;
    const cursorStart = target.selectionStart;
    const cursorEnd = target.selectionEnd;

    if (event.ctrlKey || event.altKey) return;

    // for ASCII Characters mapping
    if (
      keyCode >= KEYCODE.START_ASCII_CODE &&
      keyCode <= KEYCODE.END_ASCII_CODE
    ) {
      let convChar;
      try {
        convChar = mappingFunction("unicodify")(keyCode);
      } catch (e) {
        convChar = String.fromCharCode(keyCode);
      }
      const oldValue = myValue || "";

      const partA = oldValue?.substring(0, cursorStart) || "";

      const partB = oldValue?.substring(cursorEnd, oldValue.length) || "";

      const value = partA + convChar + partB;

      adjustCursor(event);
      event.preventDefault();
      setMyValue(value);
      onChange && isNepali ? onChange(value) : onChange(event);
    }
  };

  return (
    <TextField
      helperText={error ? error.message : null}
      error={!!error}
      onChange={handleChange}
      value={myValue}
      fullWidth
      label={label}
      variant="outlined"
      disabled={disabled}
      onKeyDown={calculate}
      //   {...props}
    />
  );
};

export default NepaliTextInput;
