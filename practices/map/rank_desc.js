'use strict';
var rank_desc = function(collection){
  return collection.sort(callback);
};

function callback(a,b) {
  if(a<b){
    return -1;
  }
  else {
    return 1;
  }
}


module.exports = rank_desc;
