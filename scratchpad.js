'use strict';

//lil bit of scratch work here, examples from videos and the readings

// function upperStr(str){
//   if (str === '') {
//     return '';
//   }
//   const newChar = str[0].toUpperCase();
//
//   // Concatenate new data with reduced string for next iteration...
//   return newChar + upperStr(str.slice(1));
// }
// console.log(upperStr('hello'));


// function filter(arr, predicate){
//   //base case
//   if (!arr.length){
//     return [];
//   }
//   if (predicate(arr[0])) {
//     return [arr[0], ...filter(arr.slice(1), predicate)];
//   }
//   return filter(arr.slice(1), predicate);
// }
//
// var arr = [10,5,6,3,8];
// console.log(filter(arr, x => x < 7));

// 
// const wee = 2;
// const woe = [3,4];
// const wer = [13,43,43];
// const why = [wee, ...woe, wer];
// console.log(why);
