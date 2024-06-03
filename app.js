// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um numero de 1 a 10'
// showElements("h1", "Jogo do número secreto");
// showElements("p", "Escolha um numero de 1 a 10");
startMsg();
let limitValue = 10
let countTry = 1;
let listNumSorted = []

function randomCreate() {
  let numChoose = parseInt(Math.random() * limitValue + 1);
  let qtdElementsList = listNumSorted.length
  if (qtdElementsList == limitValue) {
    listNumSorted = []
  }
  if (listNumSorted.includes(numChoose)) {
    return randomCreate()
  } else {
    listNumSorted.push(numChoose)
    return numChoose
  }
}

let randomNum = randomCreate();

console.log(randomNum);

function showElements(tag, text) {
  let titulo = document.querySelector(tag);
  titulo.innerHTML = text;
  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.25})
}

function verifyGuess() {
  let getInput = document.querySelector("input").value;
  // inputValue = parseInt(getInput.value)
  if (getInput == randomNum) {
    showElements("h1", "Voce acertou!")
    let wordTry = countTry > 1 ? "tentativas" : "tentativa";
    let msgTry = `Voce descobriu o numero aleatorio com ${countTry} ${wordTry}!`;
    showElements("p", msgTry);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (getInput > randomNum) {
      showElements("p", "O numero aleatorio é menor");
    } else {
      showElements("p", "O numero aleatorio é maior");
    }
    countTry++;
    clearInput();
  }
}

function clearInput() {
  getInput = document.querySelector('input')
  getInput.value = ''
}
// showElements('p', `Você excedeu a quantidade de ${cont} tentativas`)
function startMsg() {
  showElements("h1", "Jogo do número secreto");
  showElements("p", "Escolha um numero de 1 a 10");
}

function reset() {
  startMsg();
  randomNum = parseInt(Math.random() * 10 + 1);
  clearInput();
  countTry = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
