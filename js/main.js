let nombreServicio1 = "Amortiguadores"
let precioServicio1 = 7000
let stockServicio1 = 10

let nombreServicio2 = "Cubiertas"
let precioServicio2 = 15000
let stockServicio2 = 10


let cantidadCompras = prompt("Ingrese la cantidad de servicios distintos que desea comprar:\n- Amortiguadores\n- Cubiertas");
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No es posible brindarle tantos servicio, selecione una cantidad menor")
    }
}

function sumaIva(precio){
    return precio * 1.21
}
for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del servicio que desea comprar: \n- Amortiguadores\n- Cubiertas");
    let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:");

    if(compra1 == "Amortiguadores"){
        calculoStock(cantidad1, stockServicio1, precioServicio1)
    }
    else if(compra1 == "Cubiertas"){
        calculoStock(cantidad1, stockServicio2, precioServicio2)
    }
    else{
        alert("No tenemos ese servicio")
    }
}

switch(true){
    case precioTotal < 3000 || precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal > 3000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal > 6000:
        alert("Recibiste un descuento del 30% por tu compra")
        precioTotal = precioTotal * 0.70
        break;
    default:
        console.log(precioTotal)
        alert("No ingresaste un precio en numeros");
        break;
}



let precioToTalConImpuestos = sumaIva(precioTotal)

alert("Precio final con impuestos: $" + precioToTalConImpuestos)