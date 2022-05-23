//REGISTRO
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btnRegistro = document.querySelector(".btnRegistro");
const btnListar = document.querySelector(".btnListar");
const baseDeDatos = window.localStorage;

btnRegistro.onclick = ()=> {
    
    let cliente = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        password: password.value,
    }
    console.log(cliente);
    Swal.fire('Gracias por Registrarte!');
    guardarCliente(baseDeDatos,cliente );
}

const guardarCliente = (baseDeDatos, cliente) =>{
    baseDeDatos.setItem(cliente.id, JSON.stringify(cliente));
    nombre.value=null;
    apellido.value=null;
    email.value=null;
    password.value=null;
}

//CALCULO DE PRÉSTAMO

const monto = document.getElementById('monto');
const cuotas = document.getElementById('cantCuotas');
const interes = 7.97;
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#tabla tbody');

btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, interes, cuotas.value);
})

function calcularCuota(monto, interes, cuotas){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');    

    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+interes/100, cuotas)*interes/100)/(Math.pow(1+interes/100, cuotas)-1);

        console.log(cuota);

    for(let i = 1; i <= cuotas; i++) {

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);

        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)
    }
}

//ANIMACIONES

window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('seccion1Animacion');
    
})