const fs = require('fs');

var states = fs.readFileSync(__dirname + "/states.json", 'utf8');
var strArr = states.split("\n");
var statesArr = [];
strArr.forEach((str) => {
  if(str.length > 0) {
    statesArr.push(JSON.parse(str));
  }
})

module.exports.statesArr = statesArr;
