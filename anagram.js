'use strict';

function anagram(word){
  if(word===''){
    return '';
  }
  anagram(word.slice(1));
}

console.log(anagram('stop'));
