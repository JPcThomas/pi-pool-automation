const Gpio = require('onoff').Gpio;
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const relay1 = new Gpio(529, 'out'); //gpio17 out hi
const relay2 = new Gpio(539, 'out'); //gpio27 out hi
const relay3 = new Gpio(534, 'out'); //gpio22 out hi
const relay4 = new Gpio(535, 'out'); //gpio23 out hi
const relay5 = new Gpio(536, 'out'); //gpio24 out hi
const relay6 = new Gpio(528, 'out'); //gpio16 out hi
const relay7 = new Gpio(532, 'out'); //gpio20 out hi
const relay8 = new Gpio(533, 'out'); //gpio21 out hi

relay1.writeSync(1);
relay2.writeSync(1);
relay3.writeSync(1);
relay4.writeSync(1);
relay5.writeSync(1);
relay6.writeSync(1);
relay7.writeSync(1);
relay8.writeSync(1);

app.use(express.static(path.join(__dirname, 'public')));

let isAux1On = false;
let isAux2On = false;
let isAux3On = false;
let isAux4On = false;
let isAux5On = false;
let isAux6On = false;
let isAux7On = false;
let isAux8On = false;

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
    console.log("recieved request at aux2");
    isAux2On = !isAux2On;
        if(isAux2On){
            relay2.writeSync(0);
        }
        else{
            relay2.writeSync(1);
        }
            
    res.send(isAux2On?"Aux2 is On":"Aux2 is off");
})
app.post('/aux3', (req, res) =>{
    console.log("recieved request at aux3");
    isAux3On = !isAux3On;
        if(isAux3On){
            relay3.writeSync(0);
        }
        else{
            relay3.writeSync(1);
        }
        res.send(isAux3On?"Aux3 is On":"Aux3 is off");
})
app.post('/aux4', (req, res) =>{
    console.log("recieved request at aux4");
    isAux4On = !isAux4On;
        if(isAux4On){
            relay4.writeSync(0);
        }
        else{
            relay4.writeSync(1);
        }
        res.send(isAux4On?"Aux4 is On":"Aux4 is off");
})
app.post('/aux5', (req, res) =>{
    console.log("recieved request at aux5");
    isAux5On = !isAux5On;
        if(isAux5On){
            relay5.writeSync(0);
        }
        else{
            relay5.writeSync(1);
        }
        res.send(isAux5On?"Aux5 is On":"Aux5 is off");
})
app.post('/aux6', (req, res) =>{
    console.log("recieved request at aux6");
    isAux6On = !isAux6On;
        if(isAux6On){
            relay6.writeSync(0);
        }
        else{
            relay6.writeSync(1);
        }
        res.send(isAux6On?"Aux6 is On":"Aux6 is off");
})
app.post('/aux7', (req, res) =>{
    console.log("recieved request at aux7");
    isAux7On = !isAux7On;
        if(isAux7On){
            relay7.writeSync(0);
        }
        else{
            relay7.writeSync(1);
        }
        res.send(isAux7On?"Aux7 is On":"Aux7 is off");
})
app.post('/aux8', (req, res) =>{
    console.log("recieved request at aux8");
    isAux8On = !isAux8On;
        if(isAux8On){
            relay8.writeSync(0);
        }
        else{
            relay8.writeSync(1);
        }
        res.send(isAux8On?"Aux8 is On":"Aux8 is off");
})
app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port})`)
});
 












// this is the command to get the accurate gpio cat /sys/kernel/debug/gpio
