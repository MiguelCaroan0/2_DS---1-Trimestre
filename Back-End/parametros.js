function nomeIdade(nome, idade){
    return `meu nome é ${nome} e eu tenho ${idade} anos`;
}

function soma(num1 = 1, num2 = 1){
     return num1 + num2;
}

function multiplicacao(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicacao(soma(2,2), soma(4,4)));