let primeiros=[1,2,3];
let numeros=[4,5,6];

let juntados=[primeiros,numeros];
console.log(primeiros);
console.log(numeros);
console.log(juntados);

let juntadosSpread=[...primeiros,...numeros];
console.log(juntadosSpread);

//exemplo de spread com objeto
let pessoa= {
    nome:'Camila',
    idade:17,
    cargo:'estudante'
}
let dadosPessoa = {
    ...pessoa,
    status:'Ativo',
    cidade:'Campo Largo'
}