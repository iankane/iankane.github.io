var randomMax = function (max) {
  return Math.floor(Math.random() * max);
};

var ChooseRandom = function (incArray){
  var cleanArray = [];
  incArray.forEach(element => {
    if(element.value){
      cleanArray.push(element)
    }
  });
  return cleanArray[Math.floor(Math.random() * cleanArray.length)]
}

export { randomMax, ChooseRandom };
