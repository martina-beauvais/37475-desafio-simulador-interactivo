function showMessage() {
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
    getFullYear = parseInt(prompt("Ingrese un número de cuatro digitos")) 

    if(getMonth <= 12 &&  getDay <= 31 && getFullYear <=2222){
        alert("La fecha correspondiente es " +getDay+ "/" +getMonth+ "/" +getFullYear)
    }else(getMonth <= 0 && getDay <= 0 && getFullYear <= 0 && getFullYear >=2223);{
        alert("Por favor, ingrese números válidos")
    }
    

}while((isNaN(getDay) || isNaN(getMonth)) || (getMonth <= 0 || getMonth <= 12 || getDay <= 0 || getDay <= 31 || getFullYear <=2222))
