//HOME BANKING
function activar(){
    document.getElementById('usuarioYContraseña').focus();
    Swal.fire({
        title: 'Usuario y Contraseña',
        html:
            '<input id="swal-input2" class="swal2-input">',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Ingrese su contraseña',
        inputAttributes: {
          maxlength: 15,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (password) {
        Swal.fire(`Entered password: ${password}`)
      }
}
const pin = 0;
const opciones = 0;
const transferencia = document.getElementById("imputTransferencia");
const extraccion= document.getElementById('imputRetiro');
const deposito = document.getElementById('imputDeposito');
const pagos = document.getElementById('inputpagos');
let saldoTotal = parseInt( document.getElementById('saldo').innerHTML);

function depositar(){
   saldoTotal = saldoTotal + parseInt(deposito.value );
   document.getElementById('saldo').innerHTML=  saldoTotal;
   Swal.fire(
    'Operacion exitosa!',
    'Saldo actualizado $'+ saldoTotal,
    'success'
  )
  deposito.value = null;
}
function retiro(){
    if(extraccion.value>saldoTotal){
        Swal.fire({
            icon: 'error',
            title: 'No se puede realizar la operación',
            text: 'Su saldo no es suficiente',
          })
        }else{
       saldoTotal = saldoTotal - parseInt(extraccion.value);
        document.getElementById('saldo').innerHTML=  saldoTotal;
        Swal.fire(
        'Operacion exitosa!',
        'Saldo actualizado $'+ saldoTotal,
        'success'
    )
    }
    extraccion.value = null;
}

function transferencias(){
    if(transferencia.value>saldoTotal){
        Swal.fire({
            icon: 'error',
            title: 'No se puede realizar la operación',
            text: 'Su saldo no es suficiente',
          })
    }else{
        saldoTotal = saldoTotal - parseInt(transferencia.value);
            document.getElementById('saldo').innerHTML=  saldoTotal;
            Swal.fire(
            'Su transferencia ha sido realizada!',
            'Saldo actualizado $'+ saldoTotal,
            'success'
        )
    }    
    transferencia.value = null;
}
function pagoServicio(){
    if(pagos.value>saldoTotal){
        Swal.fire({
            icon: 'error',
            title: 'No se puede realizar la operación',
            text: 'Su saldo no es suficiente',
          })
    }else{
        saldoTotal = saldoTotal - parseInt(pagos.value);
            document.getElementById('saldo').innerHTML=  saldoTotal;
            Swal.fire(
            'Su pago ha sido realizado!',
            'Saldo actualizado $'+ saldoTotal,
            'success'
        )
    }    
    pagos.value = null;
}
