const data = require('./data.js');

const statesArr = data.statesArr;

var getState = (point) => {
  var state = "";
  for(var i=0; i<statesArr.length; i++) {
    statesArr[i].border.splice(statesArr[i].border.length-1, 1);
    if(contains(point, statesArr[i].border)) {
      state = statesArr[i].state;
      break;
    } else {
      state = "Not found";
    }
  }
  return state;
}

var contains = (point, arr) => {
  var i = 0, j = 0;
  var isInside = false;
  for (i = 0, j = arr.length-1; i<arr.length; j=i++) {
    if(((arr[i][1] > point[1]) != (arr[j][1] > point[1])) && (point[0] < (arr[j][0]-arr[i][0]) * (point[1]-arr[i][1]) / (arr[j][1]-arr[i][1]) + arr[i][0])) {
          isInside = !isInside;
    }
  }
  return isInside;
}

module.exports = getState
