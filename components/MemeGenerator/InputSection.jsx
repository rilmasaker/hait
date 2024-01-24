import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { Text } from "@/utils/Languages";

import FormTextField from "../Form/FormTextField";
import FromSelectChipField from "../Form/FromSelectChipField";
import FormSelectField from "../Form/FormSelectField";

const InputSection = ({ control, imageUrl, radioValue }) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={!imageUrl ? <Text tid="imageFirst" /> : ""}
      placement="top"
      followCursor
      arrow
    >
      <Box sx={styles.box}>
        <FormTextField
          name="topText"
          label={<Text tid="toptext" />}
          control={control}
          disabled={!imageUrl}
          isNepali={radioValue === "nepali"}
        />
        <FormTextField
          name="bottomText"
          label={<Text tid="bottomtext" />}
          control={control}
          disabled={!imageUrl}
          isNepali={radioValue === "nepali"}
        />
        <FromSelectChipField
          name={"tags"}
          label={<Text tid="tags2" />}
          control={control}
          disabled={!imageUrl}
        />
        <FormSelectField
          name={"category"}
          label={<Text tid="category2" />}
          control={control}
          disabled={!imageUrl}
        />
      </Box>
    </Tooltip>
  );
};

const styles = {
  box: { display: "flex", flexDirection: "column", gap: "25px" },
};

export default InputSection;
