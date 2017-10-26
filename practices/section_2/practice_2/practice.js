function count_same_elements(collection) {
  //在这里写入代码
  let arr=[];
  collection.filter((element,index,self)=>{
    if(self.indexOf(element)===index){
      let obj={};
      if(element.length>1){
        let tmp=element.split('-');
        obj.key=tmp[0];
        obj.count=Number(tmp[1]);

      }
      else {
        obj.key=element;
        obj.count=1;
      }

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
