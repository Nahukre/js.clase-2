// const solicitarNumero = parseInt(prompt("Introduzca un número"));
// if (solicitarNumero > 1000) {
//     alert("El número es superior a 1000")
// }

// const texto = prompt("Ingrese un texto");
// if (texto == "Hola") {
//     console.log("Bienvenido")
// }

// const numero = parseInt(prompt("Introduzca su nota"));
// if ((numero >= 1) && (numero < 10)) {
//     alert("Deberás esforzarte mucho para aprovar.")
// } else if ((numero >= 10) && (numero <= 50)) {
//     alert("Su nota es baja. A estudiar!")
// } else if ((numero >= 51) && (numero < 70)) {
//     alert("Su nota no está mal, pero debe mejorar.")
// } else if ((numero >= 70) && (numero < 90)) {
//     alert("Muy buena nota! Vas por buen camino.")
// } else if ((numero >= 90) && (numero <= 100)) {
//     alert("Excelente! Sigue así.")
// } else alert("La nota ingresada es incorrecta. Intente nuevamente.")


let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 100; i++) {
    let resultado = ingresarNumero + i;
    console.log(ingresarNumero + " + " + i + " = " + resultado);
}

let entrada = prompt("Ingrese un dato");
while (entrada != "ESC") {
    alert("Usted escribió " + entrada);
    entrada = prompt("ingresar otro dato");
}

let dato = prompt("Ingresar un número entre 1 y 5");
while (dato != "ESC") {
    switch (dato) {
        case "1":
            alert("HOLA");
            break;
        case "2":
            alert("HOLA HOLA");
            break;
        case "3":
            alert("HOLA HOLA HOLA")
            break;
        case "4":
            alert("HOLA HOLA HOLA HOLA")
            break;
        case "5":
            alert("HOLA HOLA HOLA HOLA HOLA")
            break;
        default:
            alert("El número ingresado es incorrecto.")
            break;
    }
    dato = prompt("Ingresar un número entre 1 y 5 por favor.");
}