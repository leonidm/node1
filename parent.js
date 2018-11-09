const { fork } = require('child_process');


console.log(`Parent PID is ${process.pid}`)

const forked = fork('child.js');

forked.on('message', msg => {
    console.log('Message from child', msg);
});

forked.send({ hello: 'world' });
