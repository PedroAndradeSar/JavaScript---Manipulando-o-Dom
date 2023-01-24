/* Função declarada.

const clicks = document.querySelector("#calcular")

clicks.addEventListener("click" , clicado)

function clicado(){

    alert("Alert - Deseja realmente enviar as notas? Para continuar confirme em OK ")
    console.log("Fui clicado em enviar notas - console.log")
}

//ESTA FUNCIONANDO
*/

//Função Anonima

const clicks = document.querySelector("#calcular");

clicks.addEventListener("click", () => {

    alert("Alert - Deseja realmente enviar as notas? Para continuar confirme em OK ")
    console.log("console.log - Fui clicado em enviar notas")

})
