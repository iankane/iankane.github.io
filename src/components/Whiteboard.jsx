import React, { useState } from "react";
import Canvas from "./Canvas";
import ToolTray from "./ToolTray";

const Whiteboard = (props) => {
  var [currentTool, setCurrentTool] = useState(-1);
  return (
    <>
      <ToolTray setter={setCurrentTool} />
      <Canvas
        width={props.width}
        height={props.height}
        currentTool={currentTool}
      ></Canvas>
      ;
    </>
  );
};

export default Whiteboard;
