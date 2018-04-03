'use strict';
//dogs = 24 different combos given the 4 letters no repeats

function anagram(word, anagrams=[]){
  if(word===''){
    return '';
  }
  anagram(word.slice(1));
}

console.log(anagram('dogs'));
