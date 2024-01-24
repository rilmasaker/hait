import { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { getByMemeCategory, getByMemeTag } from "@/firebase/read/memes";
import { Text } from "@/utils/Languages";
import { categories, tags } from "../Form/const";
import CardDesktop from "../MemeCard/DesktopCard";
import Empty from "../Common/Empty";

const styles = {
  buttonColor: {
    background: "linear-gradient(90deg, #DE6161 -5.42%, #2657EB 116.39%)",
    minWidth: 110,
  },
};

const Search = () => {
  const [value, setValue] = useState("category");
  const [valueCategory, setValueCategory] = useState("nepal");
  const [valueTags, setValueTags] = useState("nepal");
  const [results, setResults] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onChangeCategory = (e) => {
    setValueCategory(e.target.value);
  };

  const onChangeTags = (e) => {
    setValueTags(e.target.value);
  };

  const onClick = useCallback(async () => {
    if (value === "category") {
      getByMemeCategory(valueCategory).then((res) => {
        setResults(res);
        setShowEmpty(true);
        return;
      });
    }
    if (value === "tag") {
      getByMemeTag(valueTags).then((res) => {
        setResults(res);
      });
    }
  }, [value, valueCategory, valueTags]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mr: 2,
          ml: 2,
          mb: 2,
        }}
      >
        <FormControl sx={{ mb: 2 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            <Text tid="searchby" />
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="category"
              control={<Radio />}
              label={<Text tid="category2" />}
            />
            <FormControlLabel
              value="tag"
              control={<Radio />}
              label={<Text tid="tag" />}
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {value === "category" ? (
            <FormControl fullWidth sx={{ mr: 2 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                <Typography>
                  <Text tid="category2" />
                </Typography>
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={valueCategory}
                onChange={onChangeCategory}
                input={<OutlinedInput label={<Text tid="category2" />} />}
                inputProps={{ sx: { pt: 1, pb: 1 } }}
                renderValue={(selected) => selected}
              >
                {categories.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={value?.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl fullWidth sx={{ mr: 2 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                {" "}
                <Text tid="tag" />
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={valueTags}
                onChange={onChangeTags}
                input={<OutlinedInput label={<Text tid="tag" />} />}
                renderValue={(selected) => selected}
                inputProps={{ sx: { pt: 1, pb: 1 } }}
              >
                {tags.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={value?.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Button variant="contained" sx={styles.buttonColor} onClick={onClick}>
            <Typography>
              <Text tid="submit" />
            </Typography>
          </Button>
        </Box>
      </Box>
      {!results.length && showEmpty && <Empty />}
      {results.map(
        ({
          id,
          bottomText,
          category,
          src,
          tags,
          topText,
          likes,
          dislikes,
          video,
        }) => (
          <CardDesktop
            bottomText={bottomText}
            category={category}
            key={id}
            src={src}
            tags={tags}
            topText={topText}
            id={id}
            likes={likes}
            dislikes={dislikes}
            video={video}
          />
        )
      )}
    </>
  );
};

export default Search;
