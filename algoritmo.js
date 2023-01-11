var botonEncriptar= document.getElementById('boton-encriptar')
var botonDesencriptar= document.getElementById('boton-desencriptar')
var botonCopiar=document.getElementById('boton-copiar')
botonDesencriptar.addEventListener('click',fdesencriptar,false);

botonEncriptar.addEventListener('click',fencriptar,false);
botonCopiar.addEventListener('click',copyText,false);

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
    document.getElementById("texto-resultado").innerHTML = texto;
   
}
function fdesencriptar(){
   var texto= document.getElementById('texto-ingresado').value;
   texto=texto.split('');
   var resultado=[];
   for (var i=0; i<texto.length+1;i++){
    console.log(i);
    var numeroDeSaltos=0;
    if(texto[i]=="a" && texto[i+1]=="i"){
        resultado.push("a");
        numeroDeSaltos=1;

    }
    else if(texto[i]=="e"&&texto[i+1]=="n"&&texto[i+2]=="t"&&texto[i+3]=="e"&&texto[i+4]=="r"){
        resultado.push("e");
        numeroDeSaltos=4;
    }
    else if(texto[i]=="i"&&texto[i+1]=="m"&&texto[i+2]=="e"&&texto[i+3]=="s"){
        resultado.push("i");
        numeroDeSaltos=3;
    }
    else if(texto[i]=="o"&&texto[i+1]=="b"&&texto[i+2]=="e"&&texto[i+3]=="r"){
        resultado.push("o");
        numeroDeSaltos=3;
    }
    else if(texto[i]=="u"&&texto[i+1]=="f"&&texto[i+2]=="a"&&texto[i+3]=="t"){
        resultado.push("u");
        numeroDeSaltos=3;
    }
    else{
        resultado.push(texto[i]);
        console.log(i+"paso")
    }
    i=i+numeroDeSaltos;
    
   }

   resultado=resultado.join('');
   document.getElementById("texto-resultado").innerHTML = resultado;
   

}

async function copyText() {
     
    /* Seleccionar el texto */
    var texth = document.getElementById("texto-resultado");
    var text = texth.textContent;
    try {
      /* Copiar el texto seleccionado al portapapeles */
      await navigator.clipboard.writeText(text);
      console.log(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
}