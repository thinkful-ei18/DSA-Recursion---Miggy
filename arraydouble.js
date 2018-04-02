'use strict';

function arrDouble(arr){
  if(arr.length===0){
    return [];
  }
  return [arr[0]*2, ...arrDouble(arr.slice(1))];
}

const toBeDoubled = [12,22,32,42];
console.log(arrDouble(toBeDoubled));
