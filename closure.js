var power_of_2 = x_power_of(2)
var power_of_3 = x_power_of(3)

console.log(power_of_2(3))
console.log(power_of_3(3))


function x_power_of (x) {

  return function (v) {
    return v ** x;
  }
}

function counter() {
  var count = 0;

  return function () {
    count+=1;
    return count;
  }
}

var cnt1 = counter();
var cnt2 = counter();

console.log(cnt1());
console.log(cnt1());
console.log(cnt1());
console.log(cnt2());
console.log(cnt2());
console.log(cnt2());
