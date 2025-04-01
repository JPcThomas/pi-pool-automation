const Gpio = require('onoff').Gpio;
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const relay1 = new Gpio(529, 'out')
const relay2 = new Gpio(539, 'out')
const relay3 = new Gpio(534, 'out')
const relay4 = new Gpio(535, 'out')
const relay5 = new Gpio(536, 'out')
const relay6 = new Gpio(528, 'out')
const relay7 = new Gpio(532, 'out')
const relay8 = new Gpio(533, 'out')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port})`)
});
 












// this is the command to get the accurate gpio cat /sys/kernel/debug/gpio
