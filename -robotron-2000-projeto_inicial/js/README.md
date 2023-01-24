EventListener & querySelector

Na última aula, vimos como utilizar os métodos addEventListener() e querySelector(). Em conjunto, eles possibilitam receber e retornar informações à pessoa usuária.

Tendo como base o conhecimento adquirido até aqui, assinale a alternativa que contenha um conjunto de código que retorne a palavra “Confirma” com evento de clique:

Selecione uma alternativa

Alternativa correta: 

function myFunction() {
  document.querySelector("#retorna").innerHTML = "Confirma";
}

const elemento = document.querySelector("#botao");
elemento.addEventListener("click", myFunction);

Explicação: Alternativa correta! Mesmo a const sendo declarada após a função, o código funciona sem problemas. Isso acontece devido ao comportamento de hoisting no JavaScript.
**************************************************************

Aula_Funções_com_JavaScript

**Funções anonimas, são aquelas que não tem nome. Ou seja, ela é executada apenas uma vez.
ex.: ... function () {

    }
exempro de função anonima em uma aplicação:

    robotron.addEventListener("click", function(){

        console.log("Cliquei no robô.")

    });

A dirença entre as funções anonimas para as declaradas.
Anonima, só vai ser executada uma vez, quando for criada. Pois o sistema não conhece a essa função, sendo assim, ela possui um vida curta, não podendo ser chamada(reutilizada) em outra função.
Nomeada || Declaradas, são fuções que tu consegue reaproveitar no codigo, ou seja, são aquelas que o sistema ira conhecer, podendo ser convocadas e reutilizadas a qualquer momento que for conveniente.

**Apartir da versão ES6, permite outra forma de declarar as FUNÇÕES ANONIMAS é através das ARROW FUNCTION podendo ser chamada da seguinte forma ex.: ... () => {

    }

Exemplo da ARROW FUNCTION em uma aplicação:
    robotron.addEventListener("click", () => {

        console.log("Cliquei no robô.")

    });

As duas formas de Functions Anonimas ou Arrow Functions estão corretas.

****A MANIPULAÇÃO DE DADOS.****

O **PARAMETRO** vem dentro dos () da criação de uma função como por ex.:
//irei criar uma função chamada "nome":

    umNome_da_função(nome){
        console.log(nome)
    }

Exemplo de uma Manipulação de dados em uma aplicação:
    
    function dizOi(nome) {  
        alert("Oi " + nome)
        console.log("Seja Bem-vindo")
    }

    dizOi("Pedro")

//pode-se realizar uma mistura com string + parametro.

*****EVENTO*****
A função evento é utilizada para saber tudo que acontece naquele evento, por exemplo, saber onde clicou. Ex.:

    ...addEventListener("click", (evento) => {
        console.log(evento)
    });

Exemplo do EVENTO em uma aplicação.

    robotron.addEventListener("click", (evento) => {

        console.log(evento)

    });

**************************************************************

**Para saber mais: Hoisting no JavaScript**
A forma que declaramos const e variáveis podem alterar o resultado esperado do nosso código. Existe um comportamento chamado “Hoisting”, ou içamento em português, que explica os diferentes casos possíveis na linguagem JavaScript. Entender como ele funciona nesta linguagem é essencial tanto para aprimorar a prática de leitura de um código quanto para o desenvolvimento em si.

Dessa maneira, separei este artigo escrito pelo instrutor Luan Alves, para que você entenda melhor sobre este assunto.

Link para o artigo:
https://www.alura.com.br/artigos/hoisting-no-javascript

**************************************************************
**QUESTIONARIO**
Tipos de funções

Saber identificar, e utilizar corretamente função de uma função anônima é essencial para uma pessoa desenvolvedora em JavaScript.

Assinale a alternativa que contenha informações corretas em relação a estes tipos de funções:

Resposta:
Toda arrow function é também uma função anônima. Uma mesma função anônima não pode ser declarada mais de uma vez, apenas funções.


Alternativa correta! Como uma função anônima não possui nome, ela precisa sempre ser declarada onde será executada, diferente de funções que podem ser declaradas mais de uma vez.

**************************************************************

**************************************************************

**************************************************************