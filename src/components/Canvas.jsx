import React, { useEffect, useRef, useState } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  var [startX, setStartX] = useState(0);
  var [startY, setStartY] = useState(0);
  var [endX, setEndX] = useState(0);
  var [endY, setEndY] = useState(0);

  var [mouseState, setMouseState] = useState(-1);
  var toolLookup = [
    "",
    "filledRect",
    "filledEllipse",
    "lineRect",
    "lineEllipse",
  ];

  var updateObjects = function (x, y, w, h) {
    if (startX === 0 && endX === 0) {
      return;
    }
    var obj = {
      startX: x,
      startY: y,
      width: w,
      height: h,
      type: toolLookup[props.currentTool],
    };
    props.setObjects([...props.objects, obj]);
    console.log(obj);
  };
  var mouseDownHandler = function (e) {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setMouseState(0);
  };

  var mouseMoveHandler = function (e) {
    if (startX === 0 || startY === 0) {
      return;
    } else {
      setEndX(e.clientX);
      setEndY(e.clientY);
    }
    console.log("Moving");
    if (mouseState !== 1) {
      setMouseState(1);
    }
  };

  var mouseUpHandler = function (e) {
    setEndX(e.clientX);
    setEndY(e.clientY);
    setMouseState(2);
  };

  var drawBackground = function (ctx) {
    ctx.moveTo(0, 0);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, props.width, props.height);
  };

  var drawCurrent = function (ctx) {
    var canvas = canvasRef.current;
    const yOffset = canvas.getBoundingClientRect().top;
    let drawX = 0,
      drawY = 0;
    if (startX < endX) {
      drawX = startX;
    } else {
      drawX = endX;
    }
    if (startY < endY) {
      drawY = startY - yOffset;
    } else {
      drawY = endY - yOffset;
    }
    const width = Math.abs(startX - endX);
    const height = Math.abs(startY - endY);
    if (props.currentTool === 1) {
      ctx.fillStyle = "red";
      ctx.fillRect(drawX, drawY, width, height);
    } else if (props.currentTool === 2) {
      ctx.fillStyle = "red";
      ctx.ellipse(drawX, drawY, width, height);
    }
    if (props.currentTool === 3) {
      ctx.strokeStyle = "red";
      ctx.strokeRect(drawX, drawY, width, height);
    }
  };

  var drawObjArray = function (ctx) {
    for (var i = 0; i < props.objects.length; i++) {
      let obj = props.objects[i];
      if (obj.type === toolLookup[1]) {
        ctx.fillStyle = "red";
        ctx.fillRect(obj.startX, obj.startY, obj.width, obj.height);
      }

      if (obj.type === toolLookup[3]) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(obj.startX, obj.startY, obj.width, obj.height);
      }
    }
  };

  var drawUpdate = function (ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, props.width, props.height);
    drawCurrent(ctx);
    drawObjArray(ctx);
  };

  var drawEnd = function (ctx) {
    var canvas = canvasRef.current;
    const yOffset = canvas.getBoundingClientRect().top;
    let drawX = 0,
      drawY = 0;
    if (startX < endX) {
      drawX = startX;
    } else {
      drawX = endX;
    }
    if (startY < endY) {
      drawY = startY - yOffset;
    } else {
      drawY = endY - yOffset;
    }
    const width = Math.abs(startX - endX);
    const height = Math.abs(startY - endY);
    if (props.currentTool === 1) {
      ctx.fillStyle = "red";
      ctx.fillRect(drawX, drawY, width, height);
    } else if (props.currentTool === 2) {
      ctx.fillStyle = "red";
      ctx.ellipse(drawX, drawY, width, height);
    }
    if (props.currentTool === 3) {
      ctx.strokeStyle = "red";
      ctx.strokeRect(drawX, drawY, width, height);
    }
    updateObjects(drawX, drawY, width, height);
    setStartX(0);
    setStartY(0);
    setEndX(0);
    setEndY(0);
  };

  useEffect(() => {
    //MouseDown
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    if (mouseState === -1) {
      drawBackground(ctx);
    }
    if (mouseState === 1) {
      drawUpdate(ctx);
    } else if (mouseState === 2) {
      drawEnd(ctx);
    }
  }, [mouseState, startX, startY, endX, endY]);

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
