'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let arr = [];
  arr = collection_a.filter((elementa) => {
      return collection_b.some((elementb) => {
          return parseInt(elementa / elementb) === elementa / elementb;
        }
      )
    }
  )
  return arr;
}

module.exports = choose_divisible_integer;
