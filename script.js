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
if (contraseñaIngresada !== contraseña){
    for (let i=2; i > 0; i--){
        alert(`Ingresa una contraseña válida. Te quedan ${i} intentos`)
        contraseñaIngresada = prompt("Ingresa la contraseña")
        if (contraseñaIngresada === contraseña){
            alert(`Bienvenid@ ${nombreUsuario}`)
            break
        }
    }
}

if (contraseñaIngresada !== contraseña){
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
    }
}

