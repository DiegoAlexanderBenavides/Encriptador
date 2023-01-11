var bt= document.getElementById('boton-encriptar')
function fencriptar(){
   var texto= document.getElementById('texto-ingresado');
   var textoh=texto.innerHTML;
    console.log(textoh);

}

bt.addEventListener('click',fencriptar,true);
