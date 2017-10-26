'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var  arr=[];

  if(number_a>number_b){
    while(number_a>=number_b){
      arr.push(String.fromCharCode(number_a+96));
      number_a--;
    }
  }
  else if(number_a<number_b){
    while(number_a<=number_b){
      arr.push(String.fromCharCode(number_a+96));
      number_a++;
    }
  }
  else {
    arr.push(String.fromCharCode(number_a+96));
  }
  return arr;
}

module.exports = get_letter_interval;
