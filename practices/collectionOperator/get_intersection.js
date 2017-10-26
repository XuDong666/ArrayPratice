'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let arr = [];
  arr = collection_b.filter((element) => {
      if (collection_a.indexOf(element)!=-1) {
        return true;
      }
      return false;
    }
  )
  return arr;
}

module.exports = get_intersection;
