//Establecer el nombre de usuario y una contraseña
//Verifica que nombre de usuario sea un string y no tenga números 

let nombreUsuario = prompt("Por favor ingresar nombre de usuario")

let nombreNumero = parseInt(nombreUsuario)

while ((nombreUsuario === "") || (!isNaN(nombreNumero))) {
    alert("Ingresa un nombre de usuario válido")
    nombreUsuario = prompt("Por favor ingresar nombre de usuario")
    nombreNumero = parseInt(nombreUsuario)
}

const contraseñaIngresada = prompt("Ingresa la contraseña")

if (contraseñaIngresada === "") {
    alert("Ingresa una contraseña válida")
} else {
    alert(`Bienvenid@ ${nombreUsuario}`)
}

let mascota = prompt(`Elige qué mascota tienes (con un número):\n
    1- Perro\n
    2- Gato\n
    3- Otro\n`)

if (mascota !== "1") {
    alert("Lo sentimos, por ahora sólo tenemos productos para perros")
}
else {
    let nombreMascota = prompt("Por favor ingresa el nombre de tu perrito")

    let nombrePerro = parseInt(nombreMascota)

    while ((nombreMascota === "") || (!isNaN(nombrePerro))) {
        alert("Ingresa el nombre de tu perrito")
        nombreMascota = prompt("Por favor ingresa el nombre de tu perrito")
        nombrePerro = parseInt(nombreMascota)
    }

    alert(`Bienvenidos ${nombreUsuario} y ${nombreMascota}!`) 
}

