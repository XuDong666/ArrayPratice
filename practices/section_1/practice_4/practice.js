function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arr = [];
  arr = collection_a.filter((element) => {
      if (object_b.value.indexOf(element.key) !== -1) {
        return true;
      }
      else {
        return false
      }
    }
  )
  arr=arr.map((element)=>{
    return element.key;
  })
  return arr;
}

module.exports = collect_same_elements;
