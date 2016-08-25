function testFunc(first, second) {
  this.first = first;

  return second;
}

var tst1 = testFunc('without_new', 1);

var tst2 = new testFunc('with_new', 2);

console.log(tst1.constructor.name);

console.log(tst2.constructor.name);

console.log(tst1);

console.log(tst2);





function testFunction(first, second) {
  this.first = first;
  console.log(this);

  function insideFunction(second) {
    this.second = second;
  }

  insideFunction.prototype = this;

  return new insideFunction(second);
}

testFunction.prototype.testProto = function () {
  console.log('calling testProto');
  console.log(this);
  console.log(this.first);
}

console.log('====== creating test1 ======');
var test1 = testFunction('without_new', 1);

console.log('====== creating test2 ======');
var test2 = new testFunction('with_new', 2);

console.log(test1.constructor.name);

console.log(test2.constructor.name);

test2.testProto();

// not available
// test1.testProto();

console.log(test1);

console.log(test2);
