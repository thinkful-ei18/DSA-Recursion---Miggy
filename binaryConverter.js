'use strict';

function binaryConverter(decimal){
  if(decimal===1){
    return 1;
  }
  if(decimal===0){
    return 0;
  }
  return binaryConverter(Math.floor(decimal/2))+(decimal%2+'');
}

console.log(binaryConverter(620));
