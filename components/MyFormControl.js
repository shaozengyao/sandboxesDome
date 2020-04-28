import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import CancelIcon from "@material-ui/icons/Cancel";
const MyFormControl = props => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: true,
    antoine: false
  });
  const checkBoxChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormControl component="fieldset" className="formcontrol">
      <FormGroup>
        <FormControlLabel
          className="mycontrolLabel"
          control={
            <Checkbox
              checked
              onChange={checkBoxChange}
              icon={<CheckCircleIcon fontSize="small" />}
              checkedIcon={
                <CheckCircleIcon className="ischeked" fontSize="small" />
              }
              name="gilad"
            />
          }
          label="Steven Banks (steven@acme.com)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked
              onChange={checkBoxChange}
              icon={<CheckCircleIcon fontSize="small" />}
              checkedIcon={
                <CheckCircleIcon className="ischeked" fontSize="small" />
              }
              name="jason"
            />
          }
          label="Dan Smith (steven@acme.com)"
        />
        <FormControlLabel
          className="spalabel"
          control={<Checkbox icon={<CancelIcon />} />}
          label="Xavier King (x@y.com)"
        />
        <FormControlLabel
          control={
            <Checkbox icon={<QueryBuilder />} disabled name="checkedG" />
          }
          label="Custom color"
        />
      </FormGroup>
    </FormControl>
  );
};
export default MyFormControl;
