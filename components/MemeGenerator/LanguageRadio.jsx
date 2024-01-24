import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";

import { Text } from "@/utils/Languages";

const LanguageRadio = ({ handleChangeRadio, radioValue }) => {
  return (
    <>
      <Typography variant="p" component="div" sx={styles.margin}>
        {<Text tid="pleasechoose" />}
      </Typography>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {<Text tid="languageTextField" />}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={radioValue}
          onChange={handleChangeRadio}
          row
        >
          <FormControlLabel
            value="nepali"
            control={<Radio />}
            label={<Text tid="nepli" />}
          />
          <FormControlLabel
            value="english"
            control={<Radio />}
            label={<Text tid="engli" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

const styles = {
  margin: { mt: 2, mb: 2 },
};
export default LanguageRadio;
