/*
Autor: Jorge Marcelo
Data de Criação: 08/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando os elementos HTML pela id*/
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

/*Função que converte para Fahrenheit*/
function converterCelsiusToFahrenheit() {
let celsius = celsiusInput.value;
let fahrenheit = (celsius * 9/5) + 32;
fahrenheitInput.value = fahrenheit.toFixed(2);
}

/*Função que converte para celsus*/
function converterFahrenheitToCelsius() {
let fahrenheit = fahrenheitInput.value;
let celsius = (fahrenheit - 32) * 5/9;
celsiusInput.value = celsius.toFixed(2);
}

/*Escutador de ventos que vai adicionar os valores nos inputs
e também vai carregar o valor do primeiro input*/
celsiusInput.addEventListener("input", converterCelsiusToFahrenheit);
fahrenheitInput.addEventListener("input", converterFahrenheitToCelsius);
window.addEventListener("load", converterCelsiusToFahrenheit);


/*Botão de mudança de cor*/
const buttonChangeBgColor = document.getElementById("btn");

/*Função que pega um numero aletorio*/
function numeroAleatorio(){

/*Arredanda esse numero aleatorio para que
ele seja de 0 ate 256*/
return Math.floor(Math.random() * 256);
}

/*Função responsavel pela mudança de cor*/
function mudarCor(event){
event.preventDefault();
/*Aqui  ele pega cada um dos valors do RGB e trasforma em uma cor
aleatoria e essa cor vai para o body*/ 
let corAleatoria = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}
,${numeroAleatorio()})`;
document.body.style.backgroundColor = corAleatoria;
}

/*Botão que vai mudar a cor atravez do click
e automticamente vai carregar uma cor */
buttonChangeBgColor.addEventListener("click", mudarCor);
window.addEventListener("load", mudarCor);


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})