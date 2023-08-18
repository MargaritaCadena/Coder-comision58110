/*Establecer el nombre de usuario y una contraseña
Verifica que nombre de usuario sea un string y no tenga números */

//Función que valida el nombre de usuario, no pueden ser números ni estar vacío.
const validaNombre = () => {
    while ((nombreUsuario === "") || (!isNaN(nombreNumero))) {
        alert("Ingresa un nombre de usuario válido")
        nombreUsuario = prompt("Por favor ingresar nombre de usuario")
        nombreNumero = parseInt(nombreUsuario)
    }
}

//Función que valida el nombre de la mascota, no números ni vacío 
const validarNombreMascota = () => {
    while ((nombreMascota === "") || (!isNaN(nombrePerro))) {
        alert("Ingresa el nombre de tu perrito")
        nombreMascota = prompt("Por favor ingresa el nombre de tu perrito")
        nombrePerro = parseInt(nombreMascota)
    }
}

// Función que filtra por seccion 
const filtrarPorSeccion = (seccion) => {
    const resultadoFiltro = productos.filter(
        (producto) => {
            return producto.seccion === seccion
        }
    )

    const productosFiltrados = resultadoFiltro.reduce(
        (acumulador, elemento) => {
            return `${acumulador}${elemento.id} ${elemento.nombre} ${elemento.precio}\n`
        },
        "")

    alert(productosFiltrados)
}


const productos = [
    {
        nombre: "collar rojo",
        seccion: "collares",
        precio: "$20.000",
        id: "1"
    },
    {
        nombre: "collar corbatin",
        seccion: "collares",
        precio: "$35.000",
        id: "2"
    },
    {
        nombre: "cama azul",
        seccion: "camas",
        precio: "$80.000",
        id: "3"
    },
    {
        nombre: "pelota",
        seccion: "pelotas",
        precio: "$40.000",
        id: "4"
    },
]


//Solicita nombre de usuario 
let nombreUsuario = prompt("Por favor ingresar nombre de usuario")
let nombreNumero = parseInt(nombreUsuario)

//Se declaran estas variables para que puedan ser usadas desde las funciones
let nombreMascota
let nombrePerro

validaNombre()

//Declaramos una contraseña para luego poderla validar. 
let contraseñaIngresada = prompt("Ingresa la contraseña")
const contraseña = "123"

//validación de la contraseña.
if (contraseñaIngresada !== contraseña) {
    for (let i = 2; i > 0; i--) {
        alert(`Ingresa una contraseña válida. Te quedan ${i} intentos`)
        contraseñaIngresada = prompt("Ingresa la contraseña")
        if (contraseñaIngresada === contraseña) {
            alert(`Bienvenid@ ${nombreUsuario}`)
            break
        }
    }
}

if (contraseñaIngresada !== contraseña) {
    alert("Cuenta bloqueada 😜")
}
else {
    let mascota = prompt(`Elige qué mascota tienes (con un número):\n
    1- Perro\n
    2- Gato\n
    3- Otro\n`)

    if (mascota !== "1") {
        alert("Lo sentimos, por ahora sólo tenemos productos para perros")
    }
    else {
        nombreMascota = prompt("Por favor ingresa el nombre de tu perrito")

        nombrePerro = parseInt(nombreMascota)

        validarNombreMascota()

        alert(`Bienvenidos ${nombreUsuario} y ${nombreMascota}!`)

        //Menú de opciones nuevo ;) 
        let menu = prompt(`Elige una de las siguientes opciones:\n
        1. Ver lista de productos\n 
        2. Filtrar por sección \n
        3. Ver información de un producto\n`
        )

        switch (menu) {
            case "1":
                // Lista de productos
                const todosProductos = productos.reduce((acumulador, elemento) => {
                    return `${acumulador}${elemento.id} ${elemento.nombre}\n`
                }, "")
                alert(todosProductos)
                break
            case "2":
                //Filtrar
                let seccion = prompt(`Elige qué sección deseas ver:\n
                    1- Collares\n
                    2- Camas\n
                    3- Pelotas\n`)

                switch (seccion) {
                    case "1":
                        //filtra sección collares
                        filtrarPorSeccion("collares")
                        break
                    case "2":
                        filtrarPorSeccion("camas")
                        break
                    case "3":
                        filtrarPorSeccion("pelotas")
                        break
                    default:
                        alert("Por favor elige una opción válida")
                        break
                }
                break
            case "3":
                //ver información de un producto 
                let idProducto = prompt("Por favor inserta el ID del producto que deseas ver")
                const productoEncontrado = productos.find((producto) => {
                    return producto.id === idProducto
                })
                if (productoEncontrado === undefined) {
                    alert("Producto no encontrado, por favor colocar ID correcto")
                }
                else {
                    alert(`${productoEncontrado.id} ${productoEncontrado.nombre} ${productoEncontrado.precio} ${productoEncontrado.seccion}`)
                }
                break
            default:
                alert("Por favor elige una opción válida")
                break
        }
    }
}
