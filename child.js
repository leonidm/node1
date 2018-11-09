console.log(`PID is ${process.pid}`)

process.on('message', msg => {
    console.log('Message from parent', msg);
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ });
}, 3000);