import retornaSigno from "./funcoes/funcoes.js";
import colecaoSignos from "./dados/dados.js";

const dataAtual = new Date();

const signo = retornaSigno(colecaoSignos, dataAtual);

console.log("O signo de hoje : "+signo);