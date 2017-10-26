'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var  arr=[];

  if(number_a>number_b){
    while(number_a>=number_b){
      if(number_a%2!==1){
        arr.push(number_a);
      }

      number_a--;
    }
  }
  else if(number_a<number_b){
    while(number_a<=number_b){
      if(number_a%2!==1){
        arr.push(number_a);
      }

      number_a++;
    }
  }
  else {
    if(number_a%2!==1){
      arr.push(number_a);
    }
  }
  return arr;
}

module.exports = get_integer_interval_2;
