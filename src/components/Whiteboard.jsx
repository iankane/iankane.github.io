import React, { useEffect, useRef } from "react";

const Whiteboard = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, props.width, props.height);
    //draw on canvas
  });
  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};

export default Whiteboard;
