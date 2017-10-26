'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter((elements)=>{
    if(elements%3==0){
      return true;
    }
    else {
      return false;
    }
  });
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
