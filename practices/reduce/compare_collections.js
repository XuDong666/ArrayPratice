'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((prev,cur,index,array)=>{
    return prev&&(cur===collection_b[index]);
  });
}

module.exports = compare_collections;


