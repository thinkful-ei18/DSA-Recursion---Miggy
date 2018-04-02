'use strict';

function fib(num){
  if(num <= 2){
    return 1;
  }
  return fib(num-2)+fib(num-1);
}

function fibString(nthFib){
  for(let i = 1; i<=nthFib;i++){
    console.log(fib(i));
  }
  return 'end';
}

console.log(fibString(8));
