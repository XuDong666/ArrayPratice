'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  const arr=[number];
  while (arr[arr.length-1]>0){
    number-=interval;
    arr.push(Number(number.toFixed(1)));

  }
  return arr;
}

module.exports = spilt_to_zero;
