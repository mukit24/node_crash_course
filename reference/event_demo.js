const event = require('events');
const myEmmiter = new event.EventEmitter();

myEmmiter.on('event1', () => console.log('Event is fired'));

myEmmiter.emit('event1');