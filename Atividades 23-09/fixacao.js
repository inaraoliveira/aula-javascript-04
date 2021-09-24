/* 1) Criar Array com 10 itens ( de 1 a 10).
a)  Exibir no console o total de itens.
b) Exibir no console os itens nas posições: 1, 3, 5, 8. */

var nomes = ["Carlos", " João", " Maria", " Juliana", " Isis", " Davi", " Jéssica", " Pedro", " Lucas", " Victor"];

console.log("Quantidade de elementos no array nomes: " + nomes.length);
console.log("Elemento na posição 1: " + nomes[1]);
console.log("Elemento na posição 3: " + nomes[3]);
console.log("Elemento na posição 5: " + nomes[5]);
console.log("Elemento na posição 8: " + nomes[8]);

/* 2) Criar Array com 5 itens (nome de filmes).
a) Exibir no console o total de itens.
b) Exibir no console os itens nas posições: 2, 4.
c) Exibir no console o item na primeira posição. */

var filmes = ["Hush - A morte ouve", " A viagem de Chihiro", " O homem nas trevas", " Enrolados", " Fuja"]

console.log("Quantidade de elementos no array filmes: " + filmes.length);
console.log("Filme na posição 2: " + filmes[2]);
console.log("Filme na posição 4: " + filmes[4]);
console.log("Filme na primeira posição: " + filmes[0]);

/* 3) Criar Array com 6 itens (nome de músicas).
a) Exibir no console o total de itens.
b) Exibir no console os itens nas posições : 1, 2, 6, 8.
c) Exibir no console o item na última posição. */

var musicas = ["Runaway", "Entrelaços", "Surreal", "Mr. Highway's Thinking About The End", "INDUSTRY BABY", "Blinding Lights"]
var ultimaPosicao = musicas[musicas.length-1]

console.log("Quantidade de elementos no array musicas: " + musicas.length);
console.log("Música na posição 1: " + musicas[1]);
console.log("Música na posição 2: " + musicas[2]);
console.log("Música na posição 6: " + musicas[6]);
console.log("Música na posição 8: " + musicas[8]);
console.log("Música na última posição: " + ultimaPosicao)