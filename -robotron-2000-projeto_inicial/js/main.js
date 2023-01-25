const somar = document.querySelector("#idSomar");
const subtrair = document.querySelector("#idSubtrair");
const braco = document.querySelector("#idBraco");

const controle = document.querySelectorAll(".controle-ajuste")
//console.log(controle)

controle.forEach( (elemento) => {
    //console.log(elemento)
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

/*
somar.addEventListener("click", () => {
    manipulaDados("somar")
})
subtrair.addEventListener("click" , () => {
    manipulaDados("subtrair")
})
*/

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    }else {
        braco.value = parseInt(braco.value) + 1;
    }
}














/*
const robotron = document.querySelector("#idrobotron")
robotron.addEventListener("click", (evento) => {
    console.log(evento)
});

function dizOi(nome) {  
    alert(nome)
    console.log("Seja Bem-vindo")
}

dizOi("Pedro") //quando se coloca a função assim como no lado, ela é reproduzida logo em seguida.
*/