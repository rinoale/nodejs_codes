function foo() {
  console.log(this);
}

foo();

var obj = {bar: foo};

obj.bar();

var ff = new foo();
console.log(ff);
