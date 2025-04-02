const relay1 = document.getElementById('relay1');
const relay2 = document.getElementById('relay2');
const relay3 = document.getElementById('relay3');
const relay4 = document.getElementById('relay4');
const relay5 = document.getElementById('relay5');
const relay6 = document.getElementById('relay6');
const relay7 = document.getElementById('relay7');
const relay8 = document.getElementById('relay8');

relay1.addEventListener('click', turnOnAux1);
relay2.addEventListener('click', turnOnAux2);
relay3.addEventListener('click', turnOnAux3);
relay4.addEventListener('click', turnOnAux4);
relay5.addEventListener('click', turnOnAux5);
relay6.addEventListener('click', turnOnAux6);
relay7.addEventListener('click', turnOnAux7);
relay8.addEventListener('click', turnOnAux8);

async function turnOnAux1() {
    const response = await fetch('http://192.168.0.90:3000/aux1', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux2(){
    const response = await fetch('http://192.168.0.90:3000/aux2', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux3(){
    const response = await fetch('http://192.168.0.90:3000/aux3', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux4(){
    const response = await fetch('http://192.168.0.90:3000/aux4', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux5(){
    const response = await fetch('http://192.168.0.90:3000/aux5', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux6(){
    const response = await fetch('http://192.168.0.90:3000/aux6', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux7(){
    const response = await fetch('http://192.168.0.90:3000/aux7', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}

async function turnOnAux8(){
    const response = await fetch('http://192.168.0.90:3000/aux8', {method: 'POST'})
    const data = await response.text();
    console.log('Backend Response:', data);
}