'use strict';

function choose_even(collection) {
  return collection.filter((elements)=>{
    if(elements%2==1){
      return false;
    }
    else {
      return true;
    }
  });
}

module.exports = choose_even;
