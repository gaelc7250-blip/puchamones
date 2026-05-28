function mensaje(){

    document.getElementById("texto").innerHTML =
    "Juego hecho con HTML, CSS y JavaScript ";

}

function irJuego(){

    document.getElementById("juego").scrollIntoView({
        behavior:"smooth"
    });

}