var testA = function (callback1, callback2) {
  this.id_a = 'A';
  callback1();

  this.funcA = callback1;

  var testB = function () {
    this.id_b = 'B';
    callback2();
  }

  testB();
}

testA(function () {
  console.log('this in callback1 ');
  console.log(this);
}, function () {
  console.log('this in callback2 ');
  console.log(this);
})

console.log('Calling funcA');
funcA();

var test_A = new testA(function () {
  console.log('this in callback1 in new object');
  console.log(this);
}, function () {
  console.log('this in callback2 in new object');
  console.log(this);
});
console.log('this in global');
console.log(this);

console.log('calling funcA from object');
test_A.funcA();

console.log('========== simple scope test done ==========');


var heartbeat = function (periodic, timedout) {
  var wait;

  var ping = setInterval(periodic, 10000);
  wait = setTimeout(timedout, 5000);
}


heartbeat(function () {
  console.log('this in periodoic');
  console.log(this);
}, function () {
  console.log('this in timedout');
  console.log(this);
})
