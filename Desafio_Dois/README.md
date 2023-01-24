**DESAFIO**

***Consolidando o seu conhecimento***

Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.

Você pode utilizar o código base HTML e CSS disponibilizados abaixo, criar e aplicar o código JavaScript nele, ou também fique à vontade para criar o layout à sua maneira:

    Como fazer:

    Utilize os códigos HTML e CSS disponibilizados;
    Crie o arquivo de código JS;
    Referencie o arquivo JS no HTML.    

***Resolução da aula:***

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})

***Minha resolução:***

/* Função declarada.

const clicks = document.querySelector("#calcular")

clicks.addEventListener("click" , clicado)

function clicado(){

    alert("Alert - Deseja realmente enviar as notas? Para continuar confirme em OK ")
    console.log("Fui clicado em enviar notas - console.log")
}

ESTA FUNCIONANDO!!!
*/

//Função Anonima

const clicks = document.querySelector("#calcular");

clicks.addEventListener("click", () => {

    alert("Alert - Deseja realmente enviar as notas? Para continuar confirme em OK ")
    console.log("console.log - Fui clicado em enviar notas")

})

