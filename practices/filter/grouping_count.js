'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let obj={};
  collection.filter((elements,index,self)=>{
    if(self.indexOf(elements)===index){
      obj[elements]=1;
    }
    else {
      obj[elements]++;
    }
  });
  return obj;
}

module.exports = grouping_count;
