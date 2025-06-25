//Realize una funcion que calcule el sueldo de un empleado
//en JavaScript
//Consideraciones:

//Pago por hora: 30 horas
//Pago por horas extras: 31 soles 
//Descuento por faltas: 30 soles 

//El programa debe permitir ingresar:
// Cantidad de horas
//Cantidad de horas extra
// Cantidad de Faltas


function calcularSueldo(horasTrabajadas, horasExtras, faltas){
    const pagoPorHora = 30;
    const pagoPorHoraExtra = 31;
    const descuentoPorFaltas = 30;
    
    const sueldobase = horasTrabajadas * pagoPorHora;
    const pagoExtras = horasExtras *pagoPorHoraExtra;
    const descuento = faltas * descuentoPorFaltas;

    const sueldoTotal = sueldobase + pagoExtras - descuento;

    return sueldoTotal;
}

let horasTrabajadas = 8;
let horasExtras = 5;
let faltas = 2;

let sueldo = calcularSueldo(horasTrabajadas, horasExtras, faltas)

console.log("El sueldo total del empleado es: " + sueldo)