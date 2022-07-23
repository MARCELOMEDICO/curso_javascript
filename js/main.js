function noesAdulto(){
    alert("Chau Adios")
}
document.getElementById("boton").onclick=function(){
    let edad= prompt("cual es tu edad")
    let pregunta= prompt("numero 2 es par o impar??")
    let detener=false

    while (edad != ""&& pregunta != ""&&  detener==false){
        if(edad<18){
            let edad2=18 - edad;
            for(edad2;edad2>=0;edad2--)
            alert("te faltan " + edad2 + " para ser mayor")
            alert("suerte para la proxima")
            detener=true;
        }else{
            if(pregunta != "par"){
            alert("responde mejor para la proxima")
            detener=true;
        }else{
            alert("ERES APTO")
            detener=true
        }
        }


        
    }
}