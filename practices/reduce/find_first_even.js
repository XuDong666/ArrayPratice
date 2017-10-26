'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let num=collection.length;
  let a;
  collection.forEach((element,index)=>{
    if(element%2==0 && index<num){
      num=index;
      a=element;
    }
  });
  return a;
}

module.exports = find_first_even;

