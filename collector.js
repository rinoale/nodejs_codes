function testFunction () {
  return setInterval(function () {
    console.log('ping');
  }, 1000);
}


var testVar = new testFunction();


setTimeout(function () {
  console.log('deleting');
  console.log(typeof testVar);
  delete testVar;
}, 5000);
