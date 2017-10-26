'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码

  let arr = collection_a.slice();
  collection_b.map((element) => {
      if (collection_a.indexOf(element)===-1) {
        arr.push(element);
      }
    }
  )
  return arr;

}

module.exports = get_union;

