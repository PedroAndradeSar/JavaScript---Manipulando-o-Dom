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

**Aula_Funções_com_JavaScript**

**Funções anonimas, são aquelas que não tem nome. Ou seja, ela é executada apenas uma vez.
ex.: ... function () {

    }
Exemplo de função anonima em uma aplicação:

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

**Alterando um item na página**

Para realizar a alteração na pagina, devemos adicionar o ID no componente que sera alterado neste caso no HTML, no JS sera criado uma CONST com o nome do elemento que queremos alterar, neste caso o SOMAR logo em seguida será sera criado seguido com o = document.querySelector("#id_da_função"), para que ela possa ser executada. Exemplo:

    const *somar = document.querySelector("#idSomar");

Para realizar a alteração do valor direto na pagina HTML, o JavaScript tem a função chamada .VALUE , essa função permite o incremento(calculo) de numeros(soma, sub, etc). Conforme o Exemplo a seguir:

    somar.addEventListener("click", () => {
        braco.value += 1; 
    })

Em casos onde o NUMERO que deseja-se realizar o incremento estiver em string, tem-se a necessidade de usar a função *parseInt* onde faz a conversão de string para int. Exemplo

    braco.value = parseInt(braco.value) + 1

Exemplo em uma aplicação:

    const somar = document.querySelector("#idSomar");

    somar.addEventListener("click", (evento) => {
        braco.value = parseInt(braco.value) + 1
    })

Essa função ira fazer a aconversão de string para int, de modo que o HTML fique mutavel.


**************************************************************

**Aula Reaproveitando Codigo**

Para não deixar o codigo repetitivo e nem muito grande, podemos reaproveitar o codigo. 
Podemos criar uma função para isso, de modo que dividimos a responsabilidade.
Neste caso criamos a funçao *manipulaDados* que ira receber um parametro chamado *operação*. 

Exemplo em uma aplicação:

    function manipulaDados(operacao) {
        if(operacao === "subtrair") {
            braco.value = parseInt(braco.value) - 1;
        }else {
            braco.value = parseInt(braco.value) + 1;
        }
    }

Feito isso, dividimos a responsabilidade, de modo que a *function manupuladados(operacao)* ira aperas fazer a alteração de valores, enquanto a função *somar.addEventListener("click", () => { })* ira apenas avisar quando a *função manipula dados* ira ser acionada, ou seja, a *função manipula dados* ira interagir e mudar o valor quando o *somar.addEventListener("click", () => { })* for acionada(clicada).

Exemplo em uma aplicação:

    somar.addEventListener("click", () => {
        manipulaDados("somar")
    })

    subtrair.addEventListener("click" , () => {
        manipulaDados("subtrair")
    })

    function manipulaDados(operacao) {
        if(operacao === "subtrair") {

            braco.value = parseInt(braco.value) - 1;

        }else {

            braco.value = parseInt(braco.value) + 1;
        }
    }

É possivel tambem fazer uma função usando a classe, sem necessariamente usar apenas uma id.
Neste caso a classe desejada foi o *controle-ajuste* encontrada no *index.HTML*, quando queremos usar uma CLASSE no *document.querySelector()* || *document.querySelectorAll()* tem-se a necessecidade de usar o *ponto(.)*, Exemplo:

    document.querySelectorAll(".controle-ajuste")

Exemplo em uma aplicação:

    const controle = document.querySelectorAll(".controle-ajuste")
    console.log(controle)

A direferença entre o *document.querySelector()* é que ele ira buscar o primeiro que aparecer, enquanto o *document.querySelectorAll()* ira buscar e listar todos(muito usado para array).
**************************************************************
 
 **Alterando Varios Componentes**

 Ao se tratar de *Array* o JavaScript tem uma função nativa, denominada ***forEach()***.
 Toda vez que a função *forEach()* for acionada temos que passar um *ELEMENTO* e um *INDEX(indice do array)*, o *index* não é estritamente necessario, o *forEach()* consegue funcionar somente com um elemento. Exemplo:

    .forEach( (elemento) => {
        console.log(elemento)
    })

Exemplo em uma aplicação completa com a busca no seletor e a função forEach:

    const controle = document.querySelectorAll(".controle-ajuste")
    console.log(controle)

    controle.forEach( (elemento) => {
        console.log(elemento)
        })
    })

Desta maneira subracitada, acima, podemos ver quais foram todos os elementos que fazem parte da aplicação, no caso o *array*, que fez uma busca pelo *controle*.
Pode-se usar tambem o *forEach()* juntamente com uma *função anonima () => {}* e incrementar um escutador de evento, como o *.addEventListener()*, exemplo:

    controle.forEach( (elemento) => {
        console.log(elemento)
        elemento.addEventListener("click", () => {
            console.log("deu certo")
        })
    })

Exemplo completo em uma aplicação:

    const controle = document.querySelectorAll(".controle-ajuste")
    console.log(controle)

    controle.forEach( (elemento) => {
        console.log(elemento)
        elemento.addEventListener("click", () => {
            console.log(evento)
        })
    })

Foi utilizado o  *elemento.addEventListener("click", (**evento**) => {console.log(***evento**)} para saber o evento do *click*, pois dentro deste evento no console do navegador podemos localizar o **target**, que ele nos mostra onde o evento aconteceu (qual evento aconteceu).

Exemplo completo em uma aplicação utilizando o evento.target:

    const controle = document.querySelectorAll(".controle-ajuste")
    console.log(controle)

    controle.forEach( (elemento) => {
        console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            console.log(evento.target)
        })
    })

Após localizar o evento, e qual o conteudo do botão esta sendo clicado, podemos incrementar o **.textContent**, pois ele tem a função de pegar uma string(texto), enquanto o **.value** ira pegar um numero.

Exemplo em uma aplicação utilizando o .textContent:

    const controle = document.querySelectorAll(".controle-ajuste")
    console.log(controle)

    controle.forEach( (elemento) => {
        console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            console.log(evento.target.textContent)
        })
    })

Com isto, no console do navegador ira aparecer o click com o texto do botão que esta em string, utilizando sempre o console.log para ter uma visualização para teste.

Exemplo em uma aplicação, onde eu ja tenho uma função para o botão denominada por mim de *manipulaDados*, eu só faço a troca ficando assim:

    const controle = document.querySelectorAll(".controle-ajuste")
    //console.log(controle)

    controle.forEach( (elemento) => {
        //console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.textContent)
        })
    })

**************************************************************

**Alterando Elemento**

O JavaScript tem uma função chamada **.parentNode** que serve para ver quem é o *pai* do elemento, o elemento que esta acima dele(um elemento que comanda por exemplo). por exemplo:

    console.log(evento.target.parentNode)

Desta forma o codigo subracitado fará referencia ao *evento*, que neste caso seria o *click*, o *.target* ira mostrar onde o evento ocorreu, e o  *.parentNode* mostraria onde qual seria o *pai* do elemento ou da classe(para que se possa localizar).

Em uma aplicação completa ficaria da seguinte forma:

    controle.forEach( (elemento) => {
        //console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.textContent)
            console.log(evento.target.parentNode)
        })
    })

Quando conseguimos achar a classe que faz a alteração podemos realizar uma busca apenas nela. Como no caso do .querySelector(" ").
No caso queremos buscar o elemento *controle-contador*, pois ele é a o elemento pai da aplicação, que descobri com o *.parentNode*, deste modo o codigo fica assim:

    function manipulaDados(operacao) {
    const peca = document.querySelector(".controle-contador");
    }

Com isto ira aparecer 5 *controle-contador*, para fazer com que busque apenas o que foi clicado, tem que ser passado um parametro para o *controle.forEach* (*forEach* faz uma busca no array), no caso passaremos o *evento.target.parentNode*. Exemplo:

    manipulaDados(evento.target.textContent, evento.target.parentNode)

Exemplo de um codigo completo: 

    controle.forEach( (elemento) => {
        //console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.textContent, evento.target.parentNode)
        })
    })

Na função manipula dados passamos 2 blocos de parametro para ser executado.
Feito isso, temos que alterar a *function manipulaDados()*, passando mais um parametro para ela, fazendo com que ela faça uma busca no elemento pai que foi clicado. exemplo:

    function manipulaDados(operacao , controle) {
        const peca = document.querySelector(".controle-contador");
    }

Após isso, alteramos o ***document**.querySelector(.controle-contador") para ***controle**.querySelector(.controle-contador)***. exemplo:

    function manipulaDados(operacao , controle) {
        const peca = controle.querySelector(".controle-contador");
    }

Com isso ele não ira buscar no documento inteiro, e sim apenas no elemento controle.

**************************************************************

***Aula Codigo à prova de falhas***

Os **Datta Attributes** são os atributos de dados de um elemento, o *Datta Attributes* é uma função do JavaScript, no entanto ela pode ser usada no HTML para atribuir ou subtituir uma classe ou elemento. Sua sintaxe é realizada da seguinte forma no HTML.

***Nota:***A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.

 Exemplo: 
    
    data-nome_do_Elemento_Ou_Atributo

Exemplo da aplicação no HTLM:

    <div class="controle">  
        <buttom class="controle-ajuste" data-controle="-">-</buttom>
    </div>

Desta forma é criado uma classe dentro do HTML do tipo *data-* com o nome que eu irei usar, neste caso o controle e atribuindo o seu valor, neste caso o - .

Desta forma quando voltamos para o JavaSript podemos substituir o elemento do *querySelector()* pela função *Datta Attributes*, porem quando usamos ela no *querySelector()* sua sintaxe tem a necessidade do uso de *[data-...]*, exemplo:

    const controle = document.querySelectorAll("[data-controle]")

Feito isso o *querySelector()* ira buscar a função *data* dentro do HTML


**************************************************************

Questão Definindo data-attributes

Tendo em vista o conteúdo abordado sobre os data-attributes utilizados por pessoas desenvolvedoras, desde sua estreia a partir do HTML5.

Assinale abaixo a alternativa que contenha informações corretas acerca dos data-attributes.

Selecione uma alternativa

Resposta: data-attributes permitem armazenar informações extras em elementos HTML. Sua utilização não é indicada para dados visíveis, pois tecnologias de acessibilidade podem não ler seus valores. Seus dados podem ser acessados e manipulados utilizando JavaScript, ou também para estilizar elementos HTML no CSS.

**************************************************************

**Aula - Interagindo com objetos**

 A estrutura de um obejto é muito interessante por ter a chave-valor que nos deixa navegar pelo objeto usando as referências. Com pecas.bracos conseguimos entrar dentro do item e ter todo o valor, que são mais quatro itens.

Por exemplo no console do navegador podemos usar: 

    pecas.bracos

Ela ira mostrar o que esta dentro do objeto bracos.
Caso eu queria ver o que esta dentro do objeto bracos eu posso repetir o processo, ficando da seguinte forma, exemplo:

    pecas.bracos.forca

Como se trata do ultimo objeto, ele ira me retornar o seu valor.

***Nota***:
Foi realizada a incrementação de *dattas attributes* no HTML, como *data-peca=" "* e *data_estatistica=" "*, cada um com o nome correspondente a sua div.
Foi criada uma cont com os valores de peças, o qual foi usado para realizar os exemplos de interação de objetos.

**************************************************************

**Aula - Calculos dinamicos**

Buscamos todos os elementos que tinham o controle para adicionar àquele evento. Agora, o queremos adicionar também todos os elementos que tenham as estatíticas. Faremos isso unsado o *querySelectorAll()* pegando o *data-estatisticas*. Para testar, fazemos o *console.log*. exemplo:

    const estatisticas = document.querySelectorAll("[data-estatistica]")
    console.log(estatisticas)

Com isto eu consigo ver todos os elementos e seus atributos dentro do console do navegador, onde ele retornara as informações necessarias.

Com isto, com o retorno do console com os valores das estatisticas, eu quero atribuir, alterar um valor com um evento de click.

Para isso sera criada uma função **atualizaEstatisticas()**, e será chamada dentro do *controle.forEach*. Exemplo:

    controle.forEach( (elemento) => {
        //console.log(elemento)
        elemento.addEventListener("click", (evento) => {
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
            atualizaEstatisticas()
        })
    })

Usando a mesma logica da função manipula dados iremos usar o *(evento.target.dataset.peca)*. onde o **evento.target** ira mostrar onde o evento foi gerado especificamente, e o, **dataset.algumaCoisa** ira fazer a leitura do evento em que foi gerado. Neste caso foi gerado um evento na *função atualizaEstatisticas(evento.target.dataset.peca)*, o evento que foi gerado foi um evento de click no elemento peca.

Essa função **atualizaEstatisticas()** tem que ser chamada ai dentro, devido ao evento de click.

Logo abaixo será criada a função *atualizaEstatisticas* com um parametro *peca*, ficando da seguinte forma,**function atualizaEstatisticas(peca){ console.log(pecas[peca])}** para saber qual evento e o passar o paramentro que esta dentro de cada elemento, ou seja, ele ira passar todo os dados daquele ponto especifico. A função *atualizarEstatisticas* ficara da segunte forma. Exemplo:

    function atualizaEstatisticas(peca) {
        console.log(pecas[peca])
    }

Feito isso, será necessario um *forEach* para percorrer o array de estatisticas. deixando a função assim, exemplo.

    estatisticas.forEach((elemento) => {
        console.log(elemento.textContent)
    });

Feito isso, ele ira percorrer todos os numeros das estatisticas imprimindo-los no meu console do navegador, ou seja, ele caputra o valor setado no html atravez do *forEach* e mostra os valores que estão no console.log(pecas[peca]). Exemplo completo desta função:

    function atualizaEstatisticas(peca) {
        console.log(pecas[peca])

        estatisticas.forEach((elemento) => {
            console.log(elemento.dataset.estatistica)
            console.log(elemento.textContent)
        });
    }

Após conseguir ver os valores no console do navegador, podemos fazer a interação dos mesmos.
Para poder fazer a alteração dos valores temos que realizar a captura do texto e transformar em numero. Por exemplo

    elemento.textContent = parseInt(elemento.textContent)

o elemento.textContent ira pegar o elemento do texto do array = parseInt que ira transformar o string em number ** = parseInt(elemento.textContent)** e ira somar com o valor do elemento da posição clicada **(pecas[peca])** no item **elemento.dataset.estatistica**, ficando desta forma:

    elemento.textContent = parseInt(elemento.textContent) + (pecas[peca][elemento.dataset.estatistica])

Essa parte seria como um contador. Esta parte **(pecas[peca][elemento.dataset.estatistica])** eu estou usando **[]** por ser 2 arrays, eu coloquei o *()* para saber que é a mesma coisa.
A Function inteira ficará desta forma:

    function atualizaEstatisticas(peca) {
        

        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + (pecas[peca][elemento.dataset.estatistica])
        });
    }
 
.....

**Para saber mais: Objetos em JavaScript**

https://cursos.alura.com.br/course/javascript-manipulando-dom/task/106412


