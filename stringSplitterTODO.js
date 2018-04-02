'use strict';

function stringSplitter(string,seperator){
  console.log(string);
  if(string===''){
    return [];
  }
  if(string[0]===seperator){
    console.log('onto array',string);
    return [string.slice(1), ...stringSplitter(string.slice(1),seperator)] ;
  }
  return stringSplitter(string.slice(1),seperator);
}


console.log(stringSplitter('woot woot woot', ' '));
