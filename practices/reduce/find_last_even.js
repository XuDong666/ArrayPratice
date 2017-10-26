'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let num=0;
  let a;
  collection.forEach((element,index)=>{
    if(element%2==0 && index>num){
      num=index;
      a=element;
    }
  });
  return a;
}

module.exports = find_last_even;
