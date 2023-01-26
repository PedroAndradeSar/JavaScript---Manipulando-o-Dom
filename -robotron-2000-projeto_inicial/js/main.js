//const somar = document.querySelector("#idSomar");
//const subtrair = document.querySelector("#idSubtrair");
//const braco = document.querySelector("#idBraco");

const controle = document.querySelectorAll(".controle-ajuste")
//console.log(controle)

controle.forEach( (elemento) => {
    //console.log(elemento)
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao , controle) {
    const peca = controle.querySelector(".controle-contador");
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }
}

