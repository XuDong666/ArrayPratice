'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for(var i=0;i<collection.length;i++){
    result = result.concat(collection[i]);
  }
  return result.filter((elements,index,self)=>{
    return self.indexOf(elements)===index;
  });
}

module.exports = double_to_one;
