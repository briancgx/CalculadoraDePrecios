document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("numero").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calcularDescuento(); // Acción por defecto al presionar Enter en el campo número
        }
    });

    // Añadir el manejador de eventos para la tecla Enter en el campo "Cantidad de piezas"
    document.getElementById("cantidadPiezas").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calcularPrecioPorUnidad(); // Calcular precio por unidad al presionar Enter
        }
    });
});

var resultadoGlobal = 0;

function calcularDescuento() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultado = numero - (numero * 7.39 / 100);
    resultadoGlobal = resultado;
    document.getElementById("resultado").innerText = resultado;
}

function calcularImpuesto(tipoImpuesto) {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultado = 0;
    
    switch (tipoImpuesto) {
        case 'IEPS':
            resultado = numero + (numero * 34 / 100);
            break;
        case 'IVA':
            resultado = numero + (numero * 42 / 100);
            break;
        case 'IVA_IEPS':
            resultado = numero + (numero * 50 / 100);
            break;
        case 'LIBRE':
            resultado = numero + (numero * 26 / 100);
            break;
        default:
            resultado = numero;
    }

    resultadoGlobal = resultado;
    document.getElementById("resultado").innerText = resultado;
}

function calcularPrecioPorUnidad() {
    var cantidadPiezas = parseFloat(document.getElementById("cantidadPiezas").value);
    if (cantidadPiezas > 0) {
        var precioPorUnidad = resultadoGlobal / cantidadPiezas;
        document.getElementById("precioPorUnidad").innerText = precioPorUnidad;
    } else {
        document.getElementById("precioPorUnidad").innerText = "Ingrese una cantidad válida";
    }
}
