'use strict';

function collect_min_number(collection) {
  //在这里写入代码

  return collection.reduce((prev, next, index, self) => {
    return prev < next ? prev : next;
  })
}

module.exports = collect_min_number;

