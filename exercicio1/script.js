//Crie um array vazio chamado sacolao, e siga os passos abaixo:
let sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:
const fruta1 = {
    nome: 'Maça',
    preco: 2.30,
    disponibilidade: true,
}
const fruta2 = {
    nome: 'Kiwi',
    preco: 10.99,
    disponibilidade: true,
}
const fruta3 = {
    nome: 'Laranja',
    preco: 2.99,
    disponibilidade: false,
}

//b) Adicione os objetos ao array sacolao utilizando o método push()
sacolao.push(fruta1, fruta2, fruta3)

//c) Imprima a o array sacolao, e certifique-se de que agora ela seja um array com três objetos
console.log(sacolao)
