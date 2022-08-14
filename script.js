/* eslint-disable operator-linebreak */
/* eslint-disable prefer-template */
/* eslint-disable complexity */
/* eslint-disable no-param-reassign */
/// /////////////FUNÇÃO PARA GERAR QUADRO DE PIXELS

const quadroPixels = document.getElementById("pixel-board");

function geraGrid(qtdDeLinhas) {
  for (let i = 0; i < qtdDeLinhas; i += 1) {
    const linha = document.createElement("div");
    quadroPixels.appendChild(linha);
    for (let i2 = 0; i2 < qtdDeLinhas; i2 += 1) {
      const pixel = document.createElement("div");
      pixel.className = "pixel white";
      linha.appendChild(pixel);
    }
  }
}
geraGrid(5);

// /////////////CRIAR CORES ALEATORIAS
// NÃO TINHA IDEIA DE COMO FAZER ESSA FUNÇÃO ENTÃO OLHEI NO LINK PARA COMPREENDER
// https://stackoverflow.com/questions/1484506/random-color-generator

const redColor = document.querySelector(".red");
redColor.style.backgroundColor =
  "#" + (Math.random().toString(16) + "00000").slice(2, 8);
console.log(redColor);

const greenColor = document.querySelector(".green");
greenColor.style.backgroundColor =
  "#" + (Math.random().toString(16) + "00000").slice(2, 8);
console.log(greenColor);

const orangeColor = document.querySelector(".orange");
orangeColor.style.backgroundColor =
  "#" + (Math.random().toString(16) + "00000").slice(2, 8);
console.log(orangeColor);

/// /////////////FUNÇÃO PARA ADICIONAR SELECTED NA COR SELECIONADA

const black = document.querySelector(".black");
black.classList.add("selected");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");

function adicionaSelected(event) {
  // REMOVENDO O SELECT DA COR PRETA
  const acharSelected = document.querySelector(".selected");
  acharSelected.classList.remove("selected");
  // ATRIBUINDO O SELECTED NA COR CLICKADA DA PALETA

  event.target.classList.add("selected");
  console.log(event.target.classList);
}

black.addEventListener("click", adicionaSelected);
red.addEventListener("click", adicionaSelected);
green.addEventListener("click", adicionaSelected);
orange.addEventListener("click", adicionaSelected);

/// /////////////FUNÇÃO PARA ADICIONAR COR NO PIXEL CLICKADO

function pixelClickado(event) {
  // REMOVENDO O SELECT DA COR PRETA
  const acharSelected = document.querySelector(".selected");
  event.target.style.backgroundColor = acharSelected.style.backgroundColor;
  event.target.classList = acharSelected.classList;
  event.target.classList.add("pixel");
  event.target.classList.remove("color");
  event.target.classList.remove("selected");
}
const pixelEscolhido = document.getElementById("pixel-board");
pixelEscolhido.addEventListener("click", pixelClickado);

/// /////////////FUNÇÃO PARA LIMPAR O QUADRO

function limpaQuadro() {
  const pixelsTotais = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixelsTotais.length; i += 1) {
    pixelsTotais[i].className = "pixel color white";
    pixelsTotais[i].style.backgroundColor = "white";
    console.log(pixelsTotais[i]);
  }
}
const clearButton = document.querySelector("#clear-board");
clearButton.addEventListener("click", limpaQuadro);

/// /////////////BOTAO E INPUT TAMANHO DO GRID
const botaoQuantidade = document.querySelector("#generate-board");
const inputQuantidade = document.querySelector("#board-size");

// eslint-disable-next-line sonarjs/cognitive-complexity
function apertaBotao() {
  if (inputQuantidade.value === "") {
    alert("Board inválido!");
  } else if (inputQuantidade.value > 50) {
    while (quadroPixels.firstChild) {
      quadroPixels.removeChild(quadroPixels.firstChild);
    }
    geraGrid(50);
  } else if (inputQuantidade.value >= 5 && inputQuantidade.value <= 50) {
    while (quadroPixels.firstChild) {
      quadroPixels.removeChild(quadroPixels.firstChild);
    }
    geraGrid(inputQuantidade.value);
  }
}

botaoQuantidade.addEventListener("click", apertaBotao);
