/* programa veterinario */

let programa = calcularDosis(cotizarBano());

// FUNCION PEDIR NOMBRE
function pedirNombre(nombre) {
    nombre = prompt('Ingresa un nombre o presiona cancelar');
    while ((nombre === '') || (nombre === ' ')) {
        nombre = prompt('No puede ser blanco');
    } if (nombre === null) {
        alert('No ingresaste nombre');
        return nombre;
    } else {
        alert('Bienvenido: ' + nombre);
    }
    return nombre;
}
// let nombre = pedirNombre();
// console.log(nombre);

// FUNCION INGRESAR ESPECIE 
function ingresarEspecie() {
    const gato = 3;
    const perro = 5;
    let especieIngresada = true;

    let nombre = pedirNombre();
    especieIngresada = Number(prompt('Escriba 3 si es Gato ó 5 si es Perro '));

    if ((especieIngresada === 3)) {
        especieIngresada = gato;
        alert('Bienvenido: ' + nombre + ' Tu mascota es un gato');
        return gato;
    } else if ((especieIngresada === 5)) {
        especieIngresada = perro;
        alert('Bienvenido: ' + nombre + ' Tu mascota es un perro');
        return perro;
    } else {
        alert('Dato no válido');
    }
    return especieIngresada;
};
// let especieIngresada = ingresarEspecie();
// console.log(especieIngresada);

// FUNCION COTIZADOR DE BAÑOS MEDICADOS
function cotizarBano() {
    const gato = 3;
    const perro = 5;
    let small = 30000; //1 // let small = pesoIngresado > 0 && pesoIngresado <= 10;
    let medium = 40000; //2 // let medium = pesoIngresado > 10 && pesoIngresado <= 25;
    let large = 50000; //3 // let large = pesoIngresado > 25 && pesoIngresado <= 40;
    let xlarge = 60000; //4 // let xlarge = pesoIngresado > 40;
    let bano = 0;
    let banoCotizado = false;
    let cantidad = 0;

    banoCotizado = (confirm('¿Desea cotizar baño para su mascota?'));
    if (banoCotizado) {
        let especieIngresada = ingresarEspecie();
        if (especieIngresada === 3) {
            bano = small;
            especieIngresada = gato;
            alert('Para gatos el costo del baño es: $ ' + bano);
            alert('Conocer la dosis de medicamento a administra a tu mascota');
            return bano;
        } else if (especieIngresada === 5) {
            especieIngresada = perro
            let peso = ingresarPeso();
            cantidad = peso;
            let pesoValidado = validarCantidades(cantidad);

            switch (especieIngresada === perro) {
                case (pesoValidado > 0 && pesoValidado <= 10):
                    bano = small;
                    alert('Perro pequeño, el costo del baño es: $ ' + bano);
                    alert('Conocer la dosis de medicamento a administra a tu mascota');
                    break;
                case (pesoValidado > 10 && pesoValidado <= 25):
                    bano = medium;
                    alert('Perro mediano, el costo del baño es: $ ' + bano);
                    alert('Conocer la dosis de medicamento a administra a tu mascota');
                    break;
                case (pesoValidado > 25 && pesoValidado <= 40):
                    bano = large;
                    alert('Perro grande, el costo del baño es: $ ' + bano);
                    alert('Conocer la dosis de medicamento a administra a tu mascota');
                    break;
                case (pesoValidado > 40):
                    bano = xlarge;
                    alert('Perro gigante, el costo del baño es: $ ' + bano);
                    alert('Conocer la dosis de medicamento a administra a tu mascota');
                    break;
                default:
                    break;
            }
        } else {
            // alert('bano// No se puede cotizar el servicio');

            let cotizar = false
            do {
                cotizar = confirm('deseas cotizar?')
                if (cotizar) {
                    let especieIngresada = ingresarEspecie();
                    if (especieIngresada === 3) {
                        bano = small;
                        especieIngresada = gato;
                        alert('Para gatos el costo del baño es: $ ' + bano);
                        alert('Conocer la dosis de medicamento a administra a tu mascota');
                        return bano;
                    } else if (especieIngresada === 5) {
                        especieIngresada = perro
                        let peso = ingresarPeso();
                        cantidad = peso;
                        let pesoValidado = validarCantidades(cantidad);

                        switch (especieIngresada === perro) {
                            case (pesoValidado > 0 && pesoValidado <= 10):
                                bano = small;
                                alert('Perro pequeño, el costo del baño es: $ ' + bano);
                                // alert('Conocer la dosis de medicamento a administra a tu mascota');
                                break;
                            case (pesoValidado > 10 && pesoValidado <= 25):
                                bano = medium;
                                alert('Perro mediano, el costo del baño es: $ ' + bano);
                                // alert('Conocer la dosis de medicamento a administra a tu mascota');
                                break;
                            case (pesoValidado > 25 && pesoValidado <= 40):
                                bano = large;
                                alert('Perro grande, el costo del baño es: $ ' + bano);
                                // alert('Conocer la dosis de medicamento a administra a tu mascota');
                                break;
                            case (pesoValidado > 40):
                                bano = xlarge;
                                alert('Perro gigante, el costo del baño es: $ ' + bano);
                                // alert('Conocer la dosis de medicamento a administra a tu mascota');
                                break;
                            default:
                                break;
                        }
                    } else {
                        // alert('1* Conocer la dosis de medicamento a administra a tu mascota');
                    }
                } else {
                    alert('2* Conocer la dosis de medicamento a administra a tu mascota');
                }
            } while (cotizar)
        }
    } else {
        alert('En la siguiente sección podrás conocer la dosis del medicamento que debes darle a tu mascota');
    }
    return bano;
}
// let bano = cotizarBano();
// console.log(bano);

//Calcular dosis de medicamento (peso * posologia / concentración)
function calcularDosis(pesoIngresado) {
    let cantidad = 0;
    let peso = 0;
    let dosis = 0;
    let b = Number(prompt('Ingresa la posología del medicamento (mg/kg)'));
    cantidad = b;
    let posologia = validarCantidades(cantidad);
    let c = Number(prompt('Ingresa la concentración del medicamento (mg/ml)'));
    cantidad = c;
    let concentracion = validarCantidades(cantidad);

    if (posologia === Number(posologia) && concentracion === Number(concentracion)) {
        peso = ingresarPeso(pesoIngresado);
        cantidad = peso;
        pesoValidado = validarCantidades(cantidad);

        dosis += pesoValidado * (posologia / concentracion);
        alert('La dosis a administrar es: ' + dosis + ' ml  Peso ' + pesoValidado + ' x ' + ' Posología ' + posologia + ' / Concentración ' + concentracion);
        return dosis;

    } else {
        alert('Dosis = dato no válido');
    }

}
// let dosis = calcularDosis();
// console.log(dosis);

// Funcion validar cantidades (valida: concentracion, posologia, peso)
function validarCantidades(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debes agregar un número.')
        } else {
            alert('Debes ingresar un número válido.')
        }
        cantidad = Number(prompt('Por favor ingresa un número.'));
    }
    return cantidad;
}

// FUNCION INGRESAR PESO
function ingresarPeso() {
    let pesoIngresado = 0;
    let talla = '';

    pesoIngresado = Number(prompt('Ingresar el peso de su mascota Ej : 20'));
    if (pesoIngresado > 0 && pesoIngresado <= 10) {
        talla = 'small'
        alert('El peso es: ' + pesoIngresado + ' KG, ' + talla);
        return pesoIngresado;
    } else if (pesoIngresado > 10 && pesoIngresado <= 25) {
        talla = 'medium'
        alert('El peso es: ' + pesoIngresado + ' KG, ' + talla);
        return pesoIngresado;
    } else if (pesoIngresado > 25 && pesoIngresado <= 40) {
        talla = 'large'
        alert('El peso es: ' + pesoIngresado + ' KG, ' + talla);
        return pesoIngresado;
    } else if (pesoIngresado > 40) {
        talla = 'xlarge'
        alert('El peso es: ' + pesoIngresado + ' KG, ' + talla);
        return pesoIngresado;
    } else {
        alert('Dato no válido ' + pesoIngresado);
    }
    return pesoIngresado;
}
