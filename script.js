
console.warn("cargando Script!");


var contador=0;

function incrementa(){

let x = document.getElementById('cuenta');
x.innerText= new Date().toLocaleTimeString();
contador= contador +1;
setTimeout(incrementa, 1000);
}

incrementa();
