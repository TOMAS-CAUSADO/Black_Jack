let deck = [];
let tipos = ["C", "D", "H", "S"];
let especiales = ["A", "J", "Q", "k"];

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

  return deck;
};

crearDeck();

const pedir_carta = () => {
  if (deck.length === 0) {
    throw "Se acabaron las Cartas de la Baraja";
  }
  const cartas_pedida = deck.pop(); /**metodo para eliminar una carta del arrglo */
  //console.log({ cartas_pedida, deck });
  return cartas_pedida;
};

//pedir_carta();

const valor_carta = (carta) => {
    console.log(carta)
  const valor = carta.substring(0, carta.length - 1); //Funcion solo para extraer el valor de la carta y el -1 para que
  //no tome encuenta el ultimo valor que es la letra
  console.log(valor)
if (isNaN(valor)) {
    
}
const val = (isNaN( valor) ?  valor ==="A" ? 11 :10 :  (puntos = valor*1)); // Condicion para sacar el valor numerico de cada carta
  //console.log(valor);
};

//const valor = pedir_carta();
const val = valor_carta(pedir_carta());
console.log(val)