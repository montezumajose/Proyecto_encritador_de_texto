  
function encriptar(){
    
    let parrafo = document.getElementById("textarea").value;
    let numeroParrafo = parrafo.length;
    let newParrafo = "";

    for (let i = 0; i < numeroParrafo; i++){
        if(parrafo[i] == "a"){
            newParrafo += "ai";
        }else if(parrafo[i] == "e"){
            newParrafo += "enter";
        }else if(parrafo[i] == "i"){
            newParrafo += "imes";
        }else if(parrafo[i] == "o"){
            newParrafo += "ober";
        }else if(parrafo[i] == "u"){
            newParrafo += "ufat";
        }else{
            newParrafo += parrafo[i]
        }
    }

    var estadoElemento = document.getElementById("munieco");

    
    if (estadoElemento.style.display === "none") {
        document.getElementById("displayDiv").style.display ="inline";
        document.getElementById("munieco").style.display = "block";
        document.getElementById("parrafo-principal").style.display = "block";
        document.getElementById("parrafo-secundario").style.display = "block";
        

    } else {

        document.getElementById("munieco").style.display = "none";
        document.getElementById("parrafo-principal").style.display = "none";
        document.getElementById("parrafo-secundario").style.display = "none";
        document.getElementById("displayDiv").innerHTML = newParrafo;
    }
 
}

function desencriptar(){

    let parrafo = document.getElementById("textarea").value;
    let numeroParrafo = parrafo.length;
    
    var newParrafo = parrafo.replace(/ai/g, "a");
    var newParrafo = newParrafo.replace(/enter/g, "e");
    var newParrafo =  newParrafo.replace(/imes/g, "i");
    var newParrafo =  newParrafo.replace(/ober/g, "o");
    var newParrafo =  newParrafo.replace(/ufat/g, "u");
    
    var estadoElemento = document.getElementById("munieco");

    
    if (estadoElemento.style.display === "none") {
        document.getElementById("displayDiv").style.display ="inline";
        document.getElementById("munieco").style.display = "block";
        document.getElementById("parrafo-principal").style.display = "block";
        document.getElementById("parrafo-secundario").style.display = "block";
        

    } else {

        document.getElementById("munieco").style.display = "none";
        document.getElementById("parrafo-principal").style.display = "none";
        document.getElementById("parrafo-secundario").style.display = "none";
        document.getElementById("displayDiv").innerHTML = newParrafo;
    }
}