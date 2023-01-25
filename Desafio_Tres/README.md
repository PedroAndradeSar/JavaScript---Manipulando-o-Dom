Chegou a hora de praticar! No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

Como fazer:

Abra o inspecionar em qualquer página do navegador;
Na aba “console” do inspecionar passe a lista de cores;
Aplique o método para remover a cor “Vermelho”;
Utilize console.log(lista); ao final para conferir o resultado.

Resposta: 

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1, 1) 
/**
 *  Remover 1 item na posição 1. 
 * Se quiser remover 2 itens a partir da posição 1, 
 * lista.splice(1, 2), aí serão excluídas as cores "Vermelho" e "Branco"
 * array.splice(**posição inicial**, *quantidade de itens a serem excluídos*)
 */