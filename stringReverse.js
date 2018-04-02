'use strict';

function stringReverse(string){
  if(string ===''){
    return '';
  }
  const revString = string[0];
  return stringReverse(string.slice(1))+revString;
}

const testString = 'hello';
console.log(stringReverse(testString));



/*
hello
ello
llo
lo
o
*/
