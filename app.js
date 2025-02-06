let amigos = [];

let inputNome = document.querySelector(".input-name"); // Pega o campo de entrada do nome

function limparCampo() {
    // Limpa o campo de entrada
    inputNome.value = ""
}

function adicionarAmigo() {
    let nomeInserido = inputNome.value.trim(); // Pega o texto inserido no campo de entrada, excluindo os "espaços" ao redor do texto
    limparCampo()
    if (!nomeInserido) {    // Se o campo de entrada estiver vazio...
        alert("Por favor, insira um nome!");
        return;
    }
    
    amigos.push(nomeInserido)   // Adiciona o nome na lista de amigos
    console.log(amigos)
}