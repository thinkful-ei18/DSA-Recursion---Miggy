'use strict';

function countSheep(numSheep){
  if (numSheep<1){
    return;
  }
  console.log(numSheep+' Another Sheep Jumped Over The Fence');
  countSheep(numSheep-1);
}

console.log('running with 4');
countSheep(4);
console.log('running with 10');
countSheep(10);
console.log('running with -1');
countSheep(-1);
