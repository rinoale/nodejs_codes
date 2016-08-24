var testFunction = function (first, second) {
  console.log('inside of function');
  this.first = first;

  return false;
}

var result = new testFunction(1);
console.log(result);
