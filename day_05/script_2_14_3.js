'use strict'

function min(a, b) {
  return a < b ? a : b;
}

alert(`наименьшее из 2 и 5: ${min(2, 5)}`);
alert('наименьшее из 2 и 5: ' + min(2, 5));
alert('наименьшее из 2 и 5: ' + min(3, -1));
alert('наименьшее из 2 и 5: ' + min(1, 1));