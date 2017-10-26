function count_same_elements(collection) {
  //在这里写入代码
  let arr=[];
  collection.filter((element,index,self)=>{
    if(self.indexOf(element)===index){
      let obj={};
      obj.key=element;
      obj.count=1;
      arr.push(obj);
    }
    else {
      arr.forEach((element2)=>{
        if(element2.key===element){
         element2.count++;
        }
      });
    }
  });
  return arr;
}

module.exports = count_same_elements;
