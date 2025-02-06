let amigos = [];

let inputNome = document.querySelector(".input-name"); // Pega o campo de entrada do nome
let listaUL = document.querySelector(".name-list"); // Pega a lista desordenada <ul>

function atualizarListaDeAmigos() {
    listaUL.innerHTML = "";  // Limpa a lista antes de atualizar, para evitar duplicação de elementos
    for (let i = 0; i < amigos.length; i++) {
        let itemDaLista = document.createElement("li"); // Cria o list item (<li>)
        itemDaLista.textContent = amigos[i]; // Adiciona o nome do amigo no <li>
        listaUL.appendChild(itemDaLista); // Adiciona o <li> dentro da <ul>
    }
}

function adicionarAmigo() {
    let nomeInserido = inputNome.value.trim().toUpperCase(); // Pega o texto inserido no campo de entrada, excluindo os "espaços" ao redor do texto
    inputNome.value = "";
    if (!nomeInserido) {    // Se o campo de entrada estiver vazio...
        alert("Por favor, insira um nome!");
        return;
    }

    if (amigos.includes(nomeInserido)) {
        alert("Esse nome já está na lista");
        return;
    }
    
    amigos.push(nomeInserido);   // Adiciona o nome na lista de amigos
    atualizarListaDeAmigos();
}
