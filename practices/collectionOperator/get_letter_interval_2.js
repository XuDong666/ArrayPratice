'use strict';

function get_letter_interval_2(number_a, number_b) {
  let arr = [];
  if (number_a < number_b) {

    while (number_a <= number_b) {
      if (number_a <= 26) {
        arr.push(String.fromCharCode(number_a + 96));
      }
      else {
        let str = String.fromCharCode(parseInt((number_a - 1) / 26) + 96);
        str += number_a % 26 === 0 ? 'z' : String.fromCharCode(number_a % 26 + 96);
        arr.push(str);
      }
      number_a++;
    }
  }
  else if (number_a > number_b) {
    while (number_a >= number_b) {
      if (number_a <= 26) {
        arr.push(String.fromCharCode(number_a + 96));
      }
      else {
        let str = String.fromCharCode(parseInt((number_a - 1) / 26) + 96);
        str += number_a % 26 === 0 ? 'z' : String.fromCharCode(number_a % 26 + 96);
        arr.push(str);
      }
      number_a--;
    }
  }
  else {
    if (number_a <= 26) {
      arr.push(String.fromCharCode(number_a + 96));
    }
    else {
      let str = String.fromCharCode(parseInt((number_a - 1) / 26) + 96);
      str += number_a % 26 === 0 ? 'z' : String.fromCharCode(number_a % 26 + 96);
      arr.push(str);
    }
  }
  return arr;
}

module.exports = get_letter_interval_2;

