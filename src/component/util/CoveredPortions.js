import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function CoveredPortions(props) {
  const { addMoreHandler, addedPortion } = props;
  const [coveredPortion, setCoveredPortion] = useState({});
  const handleAddMoreCoveredPortion = (e) => {
    setCoveredPortion({
      ...coveredPortion,
      [e.target.name]: e.target.value,
    });
  };
  const clearCoveredPortionState = (duration) =>
    setCoveredPortion({ discribtion: "", duration: duration });

  const addCoveredPortion = () => {
    const data = { ...coveredPortion };
    addMoreHandler(data);
    clearCoveredPortionState(data.duration);
  };
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item container>
        <Grid item sm={8}>
          <h3>Course schedule</h3>
        </Grid>
      </Grid>
      {addedPortion.length?(
        <>
          <Grid item container spacing={2}>
            <Grid item sm={8}>
              <h3>Portions Covered</h3>
            </Grid>
          </Grid>
          {addedPortion.map((portion) => (
            <Grid item container spacing={2}>
              <Grid item sm={8}>
                <p>{portion.discribtion}</p>
              </Grid>
              <Grid item sm={4}>
                <h4>{portion.duration}</h4>
              </Grid>
            </Grid>
          ))}
        </>
      ):null}

      <Grid item container spacing={2}>
        <Grid item sm={8}>
          <TextField
            fullWidth
            label={"Portion covered"}
            rows="4"
            // id={}
            // placeholder={props.placeholder}
            // multiline={props.multiline}
            // rows={props.rows}
            multiline
            name={"discribtion"}
            value={coveredPortion.discribtion}
            onChange={handleAddMoreCoveredPortion}
          />
        </Grid>
        <Grid item sm={4}>
          <FormControl fullWidth>
            <InputLabel id={"course-outline"}>{"select week"}</InputLabel>

            <Select
              labelId={"course-outline"}
              id="demo-simple-select"
              value={coveredPortion.duration}
              label={"select week"}
              name={"duration"}
              onChange={handleAddMoreCoveredPortion}
            >
              {/* {values.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))} */}
              {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                <MenuItem value={`week ${value}`}>week {value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container>
        {/* <Grid sm={12}> */}
        <Button
          variant="contained"
          disabled={!coveredPortion.discribtion || !coveredPortion.duration}
          onClick={addCoveredPortion}
          style={{ marginLeft: "auto" }}
        >
          Add More
        </Button>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}