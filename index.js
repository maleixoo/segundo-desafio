/*
2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let saldoRes = saldo(19,69)
let ranking = nivel(saldoRes)

function saldo(vit,der){
    let res = vit - der      
    return res 
}

function nivel(saldoRes){
    let sald = saldoRes
    if (sald <= 10){
        sald = 'Ferro'
    } else if (sald > 10 && sald <= 20 ){
        sald = 'Bronze'
    } else if (sald > 20 && sald <= 50){
        sald = 'Prata'
    } else if (sald > 50 && sald <= 80){
        sald = 'Ouro'
    } else if (sald > 80 && sald <= 90){
        sald = 'Diamante'
    } else if (sald > 90 && sald <= 100){
        sald = 'Lendário'
    } else {
        sald = 'Imortal'
    }
    return sald
}

console.log(`O herói tem saldo de ${saldoRes} e esta no nível ${ranking}.` )

/* Na primeira tomada de decisão dentro da função nivel (), foi feito uma pequena alteração
pois caso o resultado da operação fosse 10, o retorno seria Imortal, pois foi proposto no exercicio que 
menor que 10 deveria ser Ferro e acima de 11 deveria ser Bronze, deixando assim o 10 em aberto.
Um solução seria restringir o Imortal através de um novo if forçando que a regra se aplicasse somente em casos que o resultado
fosse maior ou igual a 101, mas dessa maneira o resultado retornaria o valor da operação, pois não se encaxaria
em um nenhuma das decisões, resolvendo um problema mas não outro.

Decidi também utilizar uma nova função para alocar todo if else para que o código ficasse mais enxuto e organizado.
*/ 