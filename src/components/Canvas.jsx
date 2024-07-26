import React, { useEffect, useRef, useState } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  var [startX, setStartX] = useState(0);
  var [startY, setStartY] = useState(0);
  var [endX, setEndX] = useState(0);
  var [endY, setEndY] = useState(0);

  var [mouseState, setMouseState] = useState(-1);

  var mouseDownHandler = function (e) {
    setStartX(e.x);
    setStartY(e.y);
    setMouseState(0);
  };

  var mouseMoveHandler = function (e) {
    if (startX || startY === 0) {
      return;
    }
  };

  var mouseUpHandler = function (e) {
    setEndX(e.x);
    setEndY(e.y);
    setMouseState(2);
  };

  useEffect(() => {
    //MouseDown
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    if (mouseState === 0) {
      ctx.moveTo(startX, startY);
      ctx.fillStyle = "white";
    } else if (mouseState === 1) {
    } else if (mouseState === 2) {
      console.log(
        "Start: (" +
          startX +
          "," +
          startY +
          ") End: (" +
          endX +
          "," +
          endY +
          ")"
      );
      let drawX = 0,
        drawY = 0;
      if (startX < endX) {
        drawX = startX;
      } else {
        drawX = endX;
      }
      if (startY < endY) {
        drawY = startY;
      } else {
        drawY = endY;
      }
      const width = Math.abs(startX - endX);
      const height = Math.abs(startY - endY);
      if (props.currentTool == 1) {
        ctx.fillStyle = "red";
        ctx.fillRect(drawX, drawY, width, height);
        console.log(
          "Rect drawing: (" +
            drawX +
            "," +
            drawY +
            ") Width: " +
            width +
            ", Height: " +
            height
        );
      }
      setStartX(0);
      setStartY(0);
      setEndX(0);
      setEndY(0);
    }
  }, [mouseState, startX, startY, endX, endY]);

  //   useEffect(() => {
  //     //draw on canvas
  //     let canvas = canvasRef.current;
  //     let ctx = canvas.getContext("2d");
  //     ctx.moveTo(0, 0);
  //     ctx.fillStyle = "white";
  //     ctx.fillRect(0, 0, props.width, props.height);
  //   });

  return (
    <canvas
      ref={canvasRef}
      width={props.width}
      height={props.height}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
    />
  );
};

export default Canvas;
