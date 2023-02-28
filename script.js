// const booleano1 = false
// const booleano2 = true
// const booleano3 = false 

// if ( booleano1){
// alert(`booleano 1 true`)
// } else {
//   alert (`Booleano 1 é false`)
// }

// if (booleano1=== booleano2){
// alert(`sao iguais`)
// } else if(booleano2===booleano3){
//   alert(`sao iguais`)
// }
// else if(booleano1===booleano3){
//   alert(`sao iguais`)
// } else {
//   alert(`Não existem valores iguais`)
// }

// const temOvo = true
// const temFarinha = true
// const temLeite = true
// const temAcucar = true

// if (!temOvo) {
//   console.log(`OVO:`, temOvo)
//   console.log(`Não tem ovo, deixa quieto`)
// } else if (!temFarinha) {
//   console.log(`FARINHA:`, temFarinha)
//   console.log(`Tem ovo, mas não tem farinha. Deixa quieto.`)
// } else if (!temLeite) {
//   console.log(`LEITE:`, temLeite)
//   console.log(`Mesmo com farinha e ovos, não tem leite. Não dá pra fazer o bolinho de chuva!`)
// }else if (!temAcucar) {
//   console.log(`AÇÚCAR:`, temAcucar)
//   console.log(`Temos leite, ovos e farinha, mas sem açúcar o bolinho vai ficar horroroso.`)
// } else {
//   console.log(`IHÁÁÁÁ, LETS QUE BÓRA FAZER BOLINHO DE CHUVA`)
// }


// if (idade >= 18 && idade < 70) {
//   console.log(`Seu voto é obrigatório!`)
// } else if (idade < 16) {
//   console.log(`Você não tem idade suficiente para votar`)
// } else if (idade >= 16 && idade <= 17){
//   console.log(`Você pode emitir o título de eleitor, mas é facultativo`)
// } else if (idade >= 70){
//   console.log(`Você pode votar, mas é facultativo`)
// }

// const verificaVotoComParametro = (idade) => {
//   if (idade < 16) {
//     console.log(`Você NÃO pode votar!`)
//   } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
//   } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
//   } 


// }

// const idade = prompt(`Qual a sua idade?`)

//   if (idade < 16) {
//     console.log(`Você NÃO pode votar!`)
//   } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
//   } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
//   } else {
//     console.log(`Dado inválido`)
//   }


// Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
// Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada
// Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
// Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
// Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Es
// Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”.
// Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.

// const media = 8

// if ( media >=5 ){
//   console.log(`Aprovada`)
// }
// else (media <=5 ) {
//   console.log(`Reprovada`)
// }
// else if ( media >= 3 ){
//   console.log(`Recuperacao`)
// }

// const media = 7;

// if (media >= 5) {
//   console.log("aprovada!");
// } else if (media >= 3) {
//   console.log("recuperação!");
// } else {
//   console.log("reprovada!!");
// }

// const hora = 15

// if (hora < 6) {
//   console.log(`Boa madrugada!`)
// } else if (hora < 13) {
//   console.log(`Bom dia!`)
// } else if (hora < 19) {
//   console.log(`Boa tarde!`)
// } else if (hora <= 24) {
//   console.log(`Boa noite!`)
// } else {
//   console.log(`Não conheço essa hora!`)
// }



//RESPOSTAS PROF







// -------------------- EXEMPLOS --------------------
// EXEMPLO 1 | Condição Simples

// const velocidade = 15
// console.log(`A sua velocidade é ${velocidade}Km/h.`)

// if (velocidade > 80) {
//   console.log(`Você está acima da velocidade máxima permitida. TEJE MULTADE!`)
// }

// EXEMPLO 2 | Condição Composta

// const estaChovendo = true

// if (estaChovendo) {
//   console.log(`Ai minhas roupas tudo no varal!!`)
// } else {
//   console.log(`Hmmm, vitamina D, solzinho, bóra rolezar`)
// }


// EXEMPLO 3: Bolinho de Chuva | Condição Aninhada

// const temOvo = true
// const temFarinha = true
// const temLeite = true
// const temAcucar = true

// if (!temOvo) {
//   console.log(`OVO:`, temOvo)
//   console.log(`Não tem ovo, deixa quieto`)
// } else if (!temFarinha) {
//   console.log(`FARINHA:`, temFarinha)
//   console.log(`Tem ovo, mas não tem farinha. Deixa quieto.`)
// } else if (!temLeite) {
//   console.log(`LEITE:`, temLeite)
//   console.log(`Mesmo com farinha e ovos, não tem leite. Não dá pra fazer o bolinho de chuva!`)
// } else if (!temAcucar) {
//   console.log(`AÇÚCAR:`, temAcucar)
//   console.log(`Temos leite, ovos e farinha, mas sem açúcar o bolinho vai ficar horroroso.`)
// } else {
//   console.log(`IHÁÁÁÁ, LETS QUE BÓRA FAZER BOLINHO DE CHUVA`)
// }

// EXEMPLO 4: Cumprimento | Condição Aninhada
// entre 6h e 12h: bom dia
// entre 12h e 18h: boa tarde
// entre 18h e 24h: boa noite
// entre 0h e 6h: boa madrugada

// observação: quer usar a hora real atual? pesquisa sobre o objeto Date no MDN ;)

// const hora = 8

// if (hora < 6) {
//   console.log(`Boa madrugada!`)
// } else if (hora < 12) {
//   console.log(`Bom dia!`)
// } else if (hora < 19) {
//   console.log(`Boa tarde!`)
// } else if (hora <= 24) {
//   console.log(`Boa noite!`)
// } else {
//   console.log(`Não conheço essa hora!`)
// }



// -------------------- PRÁTICA GUIADA --------------------
// Prática Guiada 1 - A
// const booleano1 = false
// const booleano2 = true

// if (booleano1) {
//   alert(`Booleano 1 é TRUE.`)
// } else {
//   alert(`Booleano 1 é FALSE.`)
// }

// Prática Guiada 1 - B
// const booleano3 = true

// if (booleano1 === booleano2) {
//   alert(`Booleano 1 e booleano 2 são IGUAIS!`)
// } else if (booleano2 === booleano3) {
//   alert(`Booleano 2 e booleano 3 são IGUAIS!`)
// } else if (booleano1 === booleano3) {
//   alert(`Booleano 1 e booleano 3 são IGUAIS`)
// } else {
//   alert(`Não existem valores iguais!`)
// }

// Prática Guiada 2
// obs: o exercício não exige a construção de função, mas é bom praticar!

// função sem parâmetro => a função pergunta a idade da pessoa usuária usando o prompt
// function verificaVotoSemParametro() {
//   const idade = prompt(`Qual a sua idade?`)

//   if (idade < 16) {
//     console.log(`Você NÃO pode votar!`)
//   } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
//   } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
//   } else {
//     console.log(`Dado inválido`)
//   }
// }
// verificaVotoSemParametro()

// função com parâmetro => a gente envia a idade na chamada da função
// const verificaVotoComParametro = (idade) => {
//   if (idade < 16) {
//     console.log(`Você NÃO pode votar!`)
//   } else if (idade < 18 || idade >= 70) {
//     console.log(`Você PODE votar! - facultativo`)
//   } else if (idade >= 18) {
//     console.log(`Você DEVE votar!`)
//   } else {
//     console.log(`Dado inválido`)
//   }
// }
// verificaVotoComParametro(45)



// -------------------- EXERCÍCIO DE FIXAÇÃO --------------------
// Exercício de Fixação
// const media = 9

// if (media >= 5) {
//   console.log(`Estudante APROVADE!`)
// } else if (media >= 3) {
//   console.log(`Estudante em RECUPERAÇÃO!`)
// } else if (media < 3) {
//   console.log(`Estudante REPROVADE!`)
// } else {
//   console.log(`Dados inválidos!`)
// }
