'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map((element) => {
    if (element <= 26) {
      return String.fromCharCode(element + 96);
    }
    else {
      let str = String.fromCharCode(parseInt((element - 1) / 26) + 96);
      str += element % 26 === 0 ? 'z' : String.fromCharCode(element % 26 + 96);
      return str;
    }
  });
};

module.exports = number_map_to_word_over_26;
