'use strict'

let fixtures = require('./spec/fixtures');

function split(number) {
  let digits = number.split('');
  return digits;
}


function translate(digits,strings){
  let stringSet = [];

  for(let i = 0;i<3;i++){
    let string = digits.reduce((pstring,cdigit)=>{
      pstring += `${strings[cdigit][i]} `;
      return pstring;
    },'');
    stringSet.push(`${string.substring(0,string.length-1)}\n`);
  }
  return stringSet;
}

function printDigit(stringSet){

  return stringSet.reduce((pString,cString)=>{
    pString += cString;
    return pString;
  })
}


function lcdDigit(number){
  let strings = fixtures();

  let digits = split(number);
  let stringSet = translate(digits,strings);
  console.log(printDigit(stringSet));
}
exports.printDigit = printDigit;
exports.translate = translate;
exports.lcdDigit = lcdDigit;
exports.split = split;
