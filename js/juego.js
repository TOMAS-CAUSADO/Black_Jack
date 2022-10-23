let deck = [];
let tipos = ["C", "D", "H", "S"];
let especiales = ["A", "J", "Q", "k"];
let puntosJugador = 0;
let puntosComputadora = 0;

//referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btndetener = document.querySelector("#btnDetener") 
const btnnuevo = document.querySelector("#btnNuevo")

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasCompu = document.querySelector("#computadora-cartas");

const puntosJug = document.querySelectorAll("small"); //esta constante dirige exactamente de donde se va mandat la informacion obtenida
console.log(puntosJug)


/**Con esta funcion se crea una nueva baraja */
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos)
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  //console.log( deck) /**baraja ordenada */
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();


const pedir_carta = () => {
  if (deck.length === 0) {
    throw "Se acabaron las Cartas de la Baraja";
  }
  const cartas_pedida =
    deck.pop(); /**metodo para eliminar una carta del arrglo */
  return cartas_pedida;
};

//**************Funcion para determinar el valor de cada carta**************

const valor_carta = (cartas_pedida) => {
  const valor = cartas_pedida.substring(0, cartas_pedida.length - 1); //Funcion solo para extraer el valor de la carta y el -1 para que
  //no tome encuenta el ultimo valor que es la letra

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // Condicion para sacar el valor numerico de cada carta
};


//******************Eventos***********************

btnPedir.addEventListener("click", function () {
  // funcion encargada de programar la funcion del boton de pedir, la cual realiza el
  // el proceso del conteo de los puntos.

  const carta = pedir_carta();
  puntosJugador = puntosJugador + valor_carta(carta);
  puntosJug[0].innerText = puntosJugador; //puntosJug es una constante creada para asi saber donde mandar la informacion retenida

  const imgCarta = document.createElement("img"); //creamos la constante donde se va almacenar la carta de tipo imagen
  imgCarta.src = "cartas-220623-173702/cartas/" + carta + ".png"; // con esta funcion le damos la ruta de donde proviene la carta
  imgCarta.classList.add("carta"); // le pasamos las configuraciones del Css aplicados en las cartas por medio de la clase
  divCartasJugador.append(imgCarta); // muestra la imagen obtenida y guardada en imgCarta

  if (puntosJugador > 21) {
    console.warn("lo siento, has perdidos ");
    btnPedir.disabled = true; //desactivo el boton para que no pueda hacer la accion de pedir de nuevo
    btndetener.disabled = true;
    turnoComputadora( puntosJugador );    //funcion para que despues que la persona supere el numero permitido automaicamente juege la maquina y le pasamos el valor de los puntos del jugador  
  } else if (puntosJugador === 21) {
    console.warn("21, Genial!");
    btndetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora( puntosJugador)
  }
});

//********************Logica Computadora******************
const turnoComputadora = (puntosMinimos) => {
 
    do{      
      const carta = pedir_carta();
        puntosComputadora = puntosComputadora + valor_carta(carta);
        puntosJug[1].innerText = puntosComputadora; //puntosJ es una constante creada para asi saber donde mandar la informacion retenida

        const imgCarta = document.createElement("img"); //creamos la constante donde se va almacenar la carta de tipo imagen
        imgCarta.src = "cartas-220623-173702/cartas/" + carta + ".png"; // con esta funcion le damos la ruta de donde proviene la carta
        imgCarta.classList.add("carta");    // le pasamos las configuraciones del Css aplicados en las cartas por medio de la clase
        divCartasCompu.append(imgCarta);    //para que envie la carta seclecionada por la maquina al margen de espacio estipulado en el div

          if (puntosMinimos> 21) {
            break
            
          }
      }while( (puntosComputadora< puntosMinimos) && (puntosMinimos <= 21)){}
  
};

    //*******************Boton detener****************
  btndetener.addEventListener("click", function (){

    
    btnPedir.disabled = true;
    btndetener.disabled = true;
    turnoComputadora( puntosJugador)

    if ((puntosComputadora<=21) && (puntosComputadora>puntosJugador)) {
      //<div class="alert alert-info" role="alert">El Ganador fue la Cumputadora NOOB!</div>

    }

  })


