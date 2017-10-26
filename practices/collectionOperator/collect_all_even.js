`use strict`;

function collect_all_even(collection) {
  return collection.filter((elements)=>{
    if(elements%2==1){
      return false;
    }
    else {
      return true;
    }
  });
}

module.exports = collect_all_even;
