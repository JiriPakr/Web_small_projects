/*
console.log("hello world!");

global.num = '77';

console.log(global.num);
console.log(process.platform);
console.log(process.env.USER);

// this function is called on event ('exit' event) - build in event
process.on('exit', function() {

    // do something
})

// making own event
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('yum')
})

eventEmitter.emit('lunch');


// anytime you see SYNC function -> think SYNC === BLOCKING (it will need to finish running it's code before any other code can run)
const {readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf-8');


// non blocking way
readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});

console.log(txt)
console.log("do this ASAP")

// promise based solution
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf-8');
    console.log(file)
}

hello()


const myModule = require('./my-module');

console.log(myModule)
*/

// EXPRESS APP USING CALLBACKS
/*
const express = require('express');
const { readFile } = require('fs');

const app = express();

// second argument - callback function
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, error')
        }

        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost`))
*/

// EXPRESS APP USING PROMISES
const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

// second argument - callback function
app.get('/', async (request, response) => {

        response.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 8080, () => console.log(`App avaiable on http://localhost`))