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

relay1.write(1);
relay2.write(1)
relay3.write(1)
relay4.write(1)
relay5.write(1)
relay6.write(1)
relay7.write(1)
relay8.write(1)

app.use(express.static(path.join(__dirname, 'public')))

let isAux1On = false;
let isAux2On = false;

app.post('/aux1', (req, res) =>{
    console.log("recieved request at aux1");
    isAux1On = !isAux1On;
        if(isAux1On){
            relay1.writeSync(0);
        }
        else{
            relay1.writeSync(1);
        }
            
    res.send(isAux1On?"Aux1 is On":"Aux1 is off");
})
app.post('/aux2', (req, res) =>{
    console.log("recieved request at aux1");
    isAux2On = !isAux2On;
        if(isAux2On){
            relay2.writeSync(0);
        }
        else{
            relay2.writeSync(1);
        }
            
    res.send(isAux2On?"Aux1 is On":"Aux1 is off");
})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port})`)
});
 












// this is the command to get the accurate gpio cat /sys/kernel/debug/gpio
