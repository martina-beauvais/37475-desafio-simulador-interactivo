//Mensajes 
function showMessage() { 
    alert('¡Hola!')
    alert( 'Vamos a crear una fecha aleatoria' );
}
  
showMessage();


//CREAR FECHA
const fecha = new Date(); 
const day = fecha.getDay() 
const month = fecha.getMonth()
const year = fecha.getFullYear()


let getDay, getMonth, getFullYear

do{
    getDay = parseInt(prompt("Insertar un número del 1 al 31"));
    getMonth = parseInt(prompt("Insertar un número del 1 al 12"));
    getFullYear = parseInt(prompt("Ingrese un número de cuatro digitos menor a 2022")) 

    if(getMonth <= 12 &&  getDay <= 31 && getFullYear <=2022){ //Se creará una fecha menor o igual a 31/12/2022
        alert("La fecha correspondiente es " +getDay+ "/" +getMonth+ "/" +getFullYear)
    }else{ //De lo contrario, saldrá esta alerta 
        alert("Por favor, ingrese números válidos")
    }
}while((isNaN(getDay) || isNaN(getMonth)) || (getDay <= 31 || getMonth <=12 ||  getFullYear <=2022))
