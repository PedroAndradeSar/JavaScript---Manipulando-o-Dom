// botao recebe array de 'data-lista' 
// lista recebe a classe lista na tag ul do html
let botaoEsconder = document.querySelector("[data-listaEsconder]")
let botaoMostrar = document.querySelector("[data-listaMostrar]")
let ul = document.querySelector(".lista")

// se o botao0 for clicado muda o estilo para none e esconde tudo
botaoEsconder.addEventListener('click', () => {
    ul.style.display = "none"
})
// se o botao1 for clicado muda o estilo para block e mostra tudo
botaoMostrar.addEventListener('click', () => {
    ul.style.display = "block"
})
/* LOGICA DO addEventListener
     addEventListener (OQUE ESPERAR,  OQUE FAZER){
        roteiro
     }
*/