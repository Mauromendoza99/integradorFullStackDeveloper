//defino valor ticket
const valorTicket = 1000;

//defino los porcentajes
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los valores
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria')
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.querySelector('#salida');

function totalPagar() {
    // validamos la cantidad
    if (cantidad.value == 0) {
        alert('Debe ingresar una cantidad.')
    } else {
        //calcular valor total
        let totalValor = parseInt(cantidad.value) * valorTicket;
        //condiciones por descuento
        if (categoria.value == 1) {
            totalValor = totalValor - (totalValor * descuentoEstudiante)
            console.log(totalValor);
        }
        else if (categoria.value == 2) {
            totalValor = totalValor - (totalValor * descuentoTrainee)
        }
        else if (categoria.value == 3) {
            totalValor = totalValor - (totalValor * descuentoJunior)
        }
        parrafo.innerHTML = "Total a pagar : $ " + totalValor;
    }

}

//boton calcular
botonCalcular.addEventListener('click', totalPagar);
//boton reset

botonReset.addEventListener('click', () => {
    parrafo.innerHTML = "Total a pagar :"
    cantidad.value = null;

})