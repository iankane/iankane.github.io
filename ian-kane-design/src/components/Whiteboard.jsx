import React, { useState } from "react";
import Canvas from "./Canvas";
import ToolTray from "./ToolTray";

const Whiteboard = (props) => {
  var [currentTool, setCurrentTool] = useState(-1);
  var [objArray, setObjArray] = useState([]);
  return (
    <>
      <ToolTray setter={setCurrentTool} />
      <Canvas
        width={props.width}
        height={props.height}
        currentTool={currentTool}
        objects={objArray}
        setObjects={setObjArray}
      ></Canvas>
      ;
    </>
  );
};

export default Whiteboard;
