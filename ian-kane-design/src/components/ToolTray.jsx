import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function ToolTray(props) {
  const [value, setValue] = useState([]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => {
    console.log("Tool set to: " + val);
    setValue(val);
    props.setter(val);
  };

  return (
    <ToggleButtonGroup
      type="radio"
      name="tools"
      value={value}
      onChange={handleChange}
    >
      <ToggleButton id="filledRectangleBTN" value={1}>
        Filled Rectangle
      </ToggleButton>
      <ToggleButton id="filledEllipseBTN" value={2}>
        Filled Ellipse
      </ToggleButton>
      <ToggleButton id="rectangleBTN" value={3}>
        Rectangle
      </ToggleButton>
      <ToggleButton id="ellipseBTN" value={4}>
        Ellipse
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToolTray;
