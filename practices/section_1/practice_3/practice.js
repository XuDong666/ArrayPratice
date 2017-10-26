function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arr = [];
  arr = collection_a.filter((element) => {
      if (object_b.value.indexOf(element)!=-1) {
        return true;
      }
      return false;
    }
  )
  return arr;
}

module.exports = collect_same_elements;
