var bt= document.getElementById('boton-encriptar')

bt.addEventListener('click',fencriptar,false);
function fencriptar(){
   var texto= document.getElementById('texto-ingresado').value;
   texto=texto.split('');
   for (var i=0; i<texto.length;i++){
    if (texto[i]=="a"){
        texto[i]="ai";
    }
    if (texto[i]=="e"){
        texto[i]="enter";
    }
    if (texto[i]=="i"){
        texto[i]="imes";
    }
    if (texto[i]=="o"){
        texto[i]="ober";
    }
    if (texto[i]=="u"){
        texto[i]="ufat";
    }

   }
    texto=texto.join('');
    console.log(texto);
   
}
bt.onclick="window.location.href=desktop2.html";


