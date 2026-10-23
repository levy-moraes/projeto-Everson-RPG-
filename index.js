const prompt = require("prompt-sync")()

const nome = prompt("Qual o seu nome?")
const forca = Number(prompt("Qual a sua força:"))
const defesa = Number(prompt("Qual a sua defesa:"))

const forca2 = Number(prompt("Qual a força do monstro:"))
const defesa2 = Number(prompt("Qual a defesa do monstro:"))


if(forca <= defesa){
    console.log("ataque não pegou")
}   else {
    console.log("atacou com sucesso")
}