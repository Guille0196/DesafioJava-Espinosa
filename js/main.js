function producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  const producto1 = new producto('Amortiguadores', 7000, 20)
  const producto2 = new producto('Cubiertas', 15000, 15)
  

let listaProductos = [producto1, producto2]
let nombresProductos = listaProductos.map((producto) => producto.nombre)
let cantidadCompras = prompt("Ingrese la cantidad de productos diferentes que desea comprar:\n " + nombresProductos.join("\n "))
let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
    }
    else{
        alert("No es posible brindarle tantos productos, selecione una cantidad menor")
    }
}


function sumaIva(precio){
    return precio * 1.21
}
for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que desea comprar: \n " + nombresProductos.join("\n ")).toLowerCase()
    let cantidad1 = prompt("Ingrese la cantidad de productos que desea comprar:");

    if(compra1 == producto1.nombre.toLowerCase()){
        calculoStock(cantidad1, producto1)
    }
    else if(compra1 == producto2.nombre.toLowerCase()){
        calculoStock(cantidad1, producto2)
    }
    else{
        alert("No tenemos ese producto")
    }
}

switch(true){
    case precioTotal < 3000 && precioTotal > 1000:
        precioTotal = precioTotal * 0.95
        alert("Recibiste un descuento del 5% por tu compra")
        break;
    case precioTotal >= 3000 && precioTotal <6000:
        precioTotal = precioTotal * 0.90
        alert("Recibiste un descuento del 10% por tu compra")
        break;
    case precioTotal >= 6000:
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