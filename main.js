const seccionRegla = document.querySelector(".reglas");
const seccionNombre = document.querySelector(".seccionNombre");
const seccionJuego = document.querySelector(".partida");
const seccionGanador = document.querySelector(".resultado--final");
const seccionMostrarResultados = document.querySelector(".mostrarResultados");

const input = document.querySelector("#nombreInput");
const formulario = document.querySelector("#formulario");
const nombreUsuarioContador = document.querySelector(".nombreUsuarioContador");
const nombreUsuarioPartida = document.querySelector(".nombreUsuarioPartida");
const nombreUsuarioResultado = document.querySelector(".nombreUsuarioResultado");
const nombreUsuarioMostrarResultado = document.querySelector(".nombreUsuarioMostrarResultado");

const divFinPartida = document.querySelector(".finPartida");
const divContadorPartidas = document.querySelector(".contenedor-contador--victorias");
const divContadorRondas = document.querySelector(".contenedor-contador");
const divPiePaTij = document.querySelector(".imagenes--p-p-t");

const jugar = document.querySelector(".jugar");
const siguienteRonda = document.querySelector(".sigRonda");
const verResultados = document.querySelector(".finPartidaVerResltados");
const siguiente = document.querySelector(".siguiente");

const contenedorJuegoResultado = document.querySelector(".contenedorJuego--usuario");
const contenedorJuegoPC = document.querySelector(".contenedorJuego-PC");

const resultadoPantalla = document.querySelector("#resultado");
const PCResultado = document.querySelector(".PCResultado");
const objetoUno = document.querySelector(".objetoUno");
const objetoDos = document.querySelector(".objetoDos");

const contadorUsuario = document.querySelector(".contadorUsuario");
const contadorPC = document.querySelector(".contadorPC");
const rondas = document.querySelector("#rondas");

const contadorUsuarioPartida = document.querySelector(".contadorUsuarioPart");
const contadorPCPartida = document.querySelector(".contadorUsuarioPC");
const partidas = document.querySelector("#partidas");

const contadorUsuarioMostrarResultados = document.querySelector(".contadorUsuario--mostrarResultados");
const contadorPCMostrarResultados = document.querySelector(".contadorPC--mostrarResultados");

const jugarDeNuevo = document.querySelector(".jugarDeNuevo");

let numeroUsuario = 0, numeroPC = 0, contadorRondaPantalla = 1;
let numeroUsuarioPart = 0, numeroPcPart = 0, contadorPartidasPantallas = 1;
let id, idPC, resultado;
let nombre;


jugar.addEventListener("click", () => {
    seccionRegla.style.opacity = 0;
    seccionJuego.style.opacity = 0;
    seccionNombre.style.opacity = 1;
    seccionJuego.style.zIndex = "0";
    seccionNombre.style.zIndex = "200";
    seccionRegla.style.pointerEvents = "none";
    seccionGanador.style.pointerEvents = "auto";
    seccionMostrarResultados.style.pointerEvents = "auto";

    input.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            nombre = input.value;
            input.value = "";
        }
    })
});

siguiente.addEventListener("click", () => {
    nombreUsuarioContador.innerHTML = "";
    nombreUsuarioContador.innerHTML = nombre;
    nombreUsuarioPartida.innerHTML = "";
    nombreUsuarioPartida.innerHTML = nombre;
    seccionRegla.style.opacity = 0;
    seccionJuego.style.opacity = 1;
    seccionNombre.style.opacity = 0;
    seccionJuego.style.zIndex = "500";
    seccionNombre.style.pointerEvents = "none";
    seccionRegla.style.pointerEvents = "none";
    seccionGanador.style.pointerEvents = "auto";
    seccionMostrarResultados.style.pointerEvents = "auto";

    seccionGanadorFuncion();
})


siguienteRonda.addEventListener("click", () => {
    seccionRegla.style.opacity = 0;
    seccionJuego.style.opacity = 1;
    seccionJuego.style.zIndex = "200";
    seccionRegla.style.zIndex = "0";
    seccionGanador.style.zIndex = "0";
    seccionMostrarResultados.style.zIndex = "0";
    seccionGanador.style.opacity = 0;

    contadorRondaPantalla++;
    rondas.innerHTML = contadorRondaPantalla;
});

verResultados.addEventListener("click", () => {
    nombreUsuarioMostrarResultado.innerHTML = "";
    nombreUsuarioMostrarResultado.innerHTML = nombre;
    seccionRegla.style.opacity = 0;
    seccionJuego.style.opacity = 0;
    seccionGanador.style.opacity = 0;
    seccionMostrarResultados.style.opacity = 1;
    seccionMostrarResultados.style.zIndex = "1000";

    contadorUsuarioMostrarResultados.innerHTML = numeroUsuario;
    contadorPCMostrarResultados.innerHTML = numeroPC;
});

jugarDeNuevo.addEventListener("click", () => {
    //Aparecer de nuevo la seccion de juego
    seccionRegla.style.opacity = 0;
    seccionJuego.style.opacity = 1;
    seccionGanador.style.opacity = 0;
    seccionMostrarResultados.style.opacity = 0;
    seccionJuego.style.zIndex = "200";
    seccionMostrarResultados.style.zIndex = "0";
    divFinPartida.style.display = "none";
    divContadorPartidas.style.opacity = 1;
    divContadorRondas.style.opacity = 1;
    divPiePaTij.style.opacity = 1;

    //Contador partidas
    contadorPartidasPantallas++;
    partidas.innerHTML = contadorPartidasPantallas;
    if (numeroUsuario >= 3) {
        numeroUsuarioPart++;
        contadorUsuarioPartida.innerHTML = numeroUsuarioPart;
    }
    else if (numeroPC >= 3) {
        numeroPcPart++;
        contadorPCPartida.innerHTML = numeroPcPart;
    }

    //Reiniciar rondas
    numeroUsuario = 0;
    numeroPC = 0;
    contadorRondaPantalla = 1;
    rondas.innerHTML = contadorRondaPantalla;
    contadorUsuario.innerHTML = numeroUsuario;
    contadorPC.innerHTML = numeroPC;
});


const seccionGanadorFuncion = () => {
    const contenedorOpcion = document.querySelectorAll(".contenedorJuego");

    contenedorOpcion.forEach(element => {
        element.addEventListener("click", () => {
            nombreUsuarioResultado.innerHTML = "";
            nombreUsuarioResultado.innerHTML = nombre;
       
            if(nombreUsuarioResultado.innerHTML.length >= 10){
                console.log("HOLA")
                PCResultado.style.left = "5px";
            }

            else if((nombreUsuarioResultado.innerHTML.length >= 8) && (nombreUsuarioResultado.innerHTML.length < 10)){
                PCResultado.style.left = "20px";
            }
            else if((nombreUsuarioResultado.innerHTML.length >= 5) && (nombreUsuarioResultado.innerHTML.length < 8)){
                PCResultado.style.left = "45px";
            }
            else{
                PCResultado.style.left = "75px";
            }

            id = element.id;
            seccionJuego.style.opacity = 0;
            seccionGanador.style.opacity = 1;
            seccionGanador.style.zIndex = "600";
            desicionJugador();
            azarComputadora();
            ganadorRonda();
        })
    });
}


const desicionJugador = () => {
    if (id === "piedra") {
        contenedorJuegoResultado.innerHTML = `<img class="juego" src="img/piedra.png" alt="piedra">`;
        objetoUno.innerHTML = "Piedra";
    }
    else if (id === "papel") {
        contenedorJuegoResultado.innerHTML = `<img class="juego" src="img/papel.png" alt="papel">`;
        objetoUno.innerHTML = "Papel";
    }
    else if (id === "tijera") {
        contenedorJuegoResultado.innerHTML = `<img class="juego" src="img/tijera.png" alt="tijera">`;
        objetoUno.innerHTML = "Tijera";
    }
}

const azarComputadora = () => {
    let numAleatorio = Math.floor((Math.random() * 3) + 1);

    if (numAleatorio === 1) {
        idPC = "piedra";
        contenedorJuegoPC.innerHTML = `<img class="juego" src="img/piedra.png" alt="piedra">`;
        objetoDos.innerHTML = "Piedra";
    }
    else if (numAleatorio === 2) {
        idPC = "papel";
        contenedorJuegoPC.innerHTML = `<img class="juego" src="img/papel.png" alt="papel">`;
        objetoDos.innerHTML = "Papel";
    }
    else if (numAleatorio === 3) {
        idPC = "tijera";
        contenedorJuegoPC.innerHTML = `<img class="juego" src="img/tijera.png" alt="tijera">`;
        objetoDos.innerHTML = "Tijera";
    }
}

const ganadorRonda = () => {
    if ((id === "piedra") && (idPC === "tijera")) {
        resultado = "GANASTE🎉🎉";
        resultadoPantalla.innerHTML = resultado;
        contadorRondas()
    }
    else if ((id === "papel") && (idPC === "piedra")) {
        resultado = "GANASTE🎉🎉";
        resultadoPantalla.innerHTML = resultado;
        contadorRondas()

    }
    else if ((id === "tijera") && (idPC === "papel")) {
        resultado = "GANASTE🎉🎉";
        resultadoPantalla.innerHTML = resultado;
        contadorRondas()

    }
    else if (id === idPC) {
        resultado = "EMPATASTE😑😑";
        resultadoPantalla.innerHTML = resultado;
        contadorRondas()

    }
    else {
        resultado = "PERDISTE😭😭";
        resultadoPantalla.innerHTML = resultado;
        contadorRondas()
    }
}


const contadorRondas = () => {
    if (resultado === "GANASTE🎉🎉") {
        numeroUsuario++;
        contadorUsuario.innerHTML = numeroUsuario;
        finalPartidaPantalla();
    }
    else if (resultado === "PERDISTE😭😭") {
        numeroPC++;
        contadorPC.innerHTML = numeroPC;
        finalPartidaPantalla()
    }
}

const finalPartidaPantalla = () => {
    if ((numeroUsuario + numeroPC === 5) && (numeroUsuario >= 3 || numeroPC >= 3)) {
        divFinPartida.style.display = "block";
        divContadorPartidas.style.opacity = 0;
        divContadorRondas.style.opacity = 0;
        divPiePaTij.style.opacity = 0;
    }
}


