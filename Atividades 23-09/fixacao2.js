/* 1) Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
a) Coloque eles em ordem crescente.
b) Exibir no Console. */

var numeros = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];

numeros.sort();
console.log(numeros);

/* 2) Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
a) Adicionar o time "Flamengo" no final do array.
b) Remover o time que está no início do array.
c) Adicionar o time "Palmeiras" no início do array.
d) Adicionar o time "Grêmio" no final do array.
e) Adicionar os times "São Paulo" e "Santos" do início do array.
f) Exibir, no console, a quantidade de elementos no array.
g) Remover o time que está no final do array.
h) Exibir, no console, em ordem crescente os times que estão no array. */

var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];

times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.push("Grêmio");
times.unshift("São Paulo", "Santos");
console.log("Quantidade de elementos no array: " + times.length);
times.pop();
console.log(times.sort());

/* 3) Criar um array contendo 7 atividades que você faz durante o dia.
a) Exibir no console as atividades na ordem inversa.
b) Selecionar e exibir no console, os elementos nas posições 3 e 6.
c) Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
d) Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado. */

var atividadesDoDia = ["Tomar banho", "Arrumar a casa", "Fazer Almoço", "Cuidar das plantas", "Alimentar a cachorra", "Estudar", "Jogar"]; //Criando array

console.log(atividadesDoDia.reverse());

let selecionarElementos = atividadesDoDia.slice(3, 4,); //Selecioando elementos
let selecionarElementos_ = atividadesDoDia.slice(6, 7); //Selecioando elementos

console.log("Elemento da posição 3: " + selecionarElementos + ". " + "Elemento da posição 6: " + selecionarElementos_);
console.log(atividadesDoDia.join(' - '));

let duasAtividades = ["Assistir filmes", "Ouvir música"]; // Array com atividades que mais gosto
let juntandoArray = atividadesDoDia.concat(duasAtividades);
console.log(juntandoArray);

/* 4) Criar um array com o nome de 5 cidades.
a) Exibir, no console, em ordem crescente os times que estão no array.
b) Remover a cidade que está no início do array.
c) Remover a cidade que está no final do array.
d) Exibir, no console, em ordem crescente os times que estão no array. */

var cidades = ["Recife", "Porto Alegre", "Manaus", "Curitiba", "Fortaleza"];

console.log(cidades.sort());
cidades.shift();
cidades.pop();
console.log(cidades.sort());

