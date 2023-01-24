const robotron = document.querySelector("#idrobotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
});

function dizOi(nome) {  
    alert(nome)
    console.log("Seja Bem-vindo")
}

dizOi("Pedro") //quando se coloca a função assim como no lado, ela é reproduzida logo em seguida.
