var fixtures = require('./spec/fixtures');

function split(number) {
  var digits = number.split('');
  return digits;
}


function translate(digits,strings){
  var stringSet = [];

  for(var i = 0;i<3;i++){
    var string="";
    digits.forEach(function(digit){
      string += strings[digit][i] + " ";
    })
    string = string.substring(0,string.length-1)+"\n";
    stringSet.push(string);
  }
  
  return stringSet;
}



function printDigit(stringSet){
  var text="";
  
  stringSet.forEach(function(string){
    text+=string;
  })

  return text;
}


function lcdDigit(number){
  var strings = fixtures();

  var digits = split(number);
  var stringSet = translate(digits,strings);
  console.log(printDigit(stringSet));
}
exports.printDigit = printDigit;
exports.translate = translate;
exports.lcdDigit = lcdDigit;
exports.split = split;