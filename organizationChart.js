'use strict';

const network =[
  {id:'Zuckerberg', parent:null},
  {id:'Schroepfer', parent:'Zuckerberg'},
  {id:'Bosworth', parent:'Schroepfer'},
  {id:'Steve', parent:'Bosworth'},
  {id:'Kyle', parent:'Bosworth'},
  {id:'Andra', parent:'Bosworth'},
  {id:'Zhao', parent:'Schroepfer'},
  {id:'Richie', parent:'Zhao'},
  {id:'Sofia', parent:'Zhao'},
  {id:'Jen', parent:'Zhao'},
  {id:'Schrage', parent:'Zuckerberg'},
  {id:'VanDyck', parent:'Schrage'},
  {id:'Sabrina', parent:'VanDyck'},
  {id:'Michelle', parent:'VanDyck'},
  {id:'Josh', parent:'VanDyck'},
  {id:'Swain', parent:'Schrage'},
  {id:'Blanch', parent:'Swain'},
  {id:'Tom', parent:'Swain'},
  {id:'Joe', parent:'Swain'},
];

function organize(categories, parent){
  let node = {};
  categories.filter(c => c.parent === parent)
    .forEach(c => node[c.id] = organize(categories, c.id));
  return node;
}


console.log(
  JSON.stringify(
    organize(network,null), null, 4)
);
