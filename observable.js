var EventEmitter = require('events').EventEmitter;
var util = require('util');

function AnObjectObservable() {
  EventEmitter.call(this);
}

// AnObjectObservable.prototype.__proto__ = EventEmitter.prototype;
util.inherits(AnObjectObservable, EventEmitter);

AnObjectObservable.prototype.hello = function (name) {
  this.emit('hello', name);
}

var observable = new AnObjectObservable();

observable.on('hello', function (name) {
  console.log('HELLO ', name);
})

observable.hello('rinoale');

observable.emit('hello', 'gbsong');
