'use strict';

function stringReverse(string){
  if(string === ''){
    return '';
  }
  return stringReverse(string.slice(1))+string[0];
}

const testString = 'hello';
console.log(stringReverse(testString));

const testString2 = 'racecar!';
console.log(stringReverse(testString2));
