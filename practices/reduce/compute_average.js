'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((prev,cur,index)=>{
    return (prev*(index)+cur)/(index+1);
  });
}

module.exports = compute_average;

