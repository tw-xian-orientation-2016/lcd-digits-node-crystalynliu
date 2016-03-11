'use strict'
let main = require('../main');

describe('lcdDigit()', function() {
  
  it('correct result when number = 9', function() {
    spyOn(console, 'log');

    main.lcdDigit("9");

    let expectText ="._.\n|_|\n..|\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct result when number = 91', function() {
    spyOn(console, 'log');

    main.lcdDigit("91");

    let expectText ="._. ...\n|_| ..|\n..| ..|\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('correct result when number = 910', function() {
    spyOn(console, 'log');

    main.lcdDigit("910");

    let expectText ="._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

})