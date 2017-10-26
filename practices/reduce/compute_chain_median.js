'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  collection=collection.split('->');
  collection=collection.map((element)=>{
    return Number(element);
  })
  collection.sort(callback);
  return collection.reduce((prev,cur,index,self)=>{
    if(index%2===1){
      //偶数位
      return (prev+self[(index+1)/2])/2;
    }
    else {
      //奇数位
      return self[index/2];
    }
  });
}
function callback(a,b) {
  if(a>b){
    return 1;
  }
  else {
    return -1;
  }
}
module.exports = compute_chain_median;
