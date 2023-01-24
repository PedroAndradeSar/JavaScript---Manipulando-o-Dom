const somar = document.querySelector("#idSomar");
const subtrair = document.querySelector("#idSubtrair");
const braco = document.querySelector("#idBraco");

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1
})

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