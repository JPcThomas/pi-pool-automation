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