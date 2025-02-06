let amigos = [];

let inputNome = document.querySelector(".input-name"); // Pega o campo de entrada do nome
let listaAmigosSelecionados = document.querySelector(".name-list"); // Pega a lista <ul> que vai renderizar os amigos selecionados
let resultadoSorteio = document.querySelector(".result-list"); // Pega a lista <ul> que vai exibir o amigo sorteado

function atualizarListaDeAmigos() {
    listaAmigosSelecionados.innerHTML = "";  // Limpa a lista antes de atualizar, para evitar duplicação de elementos
    for (let i = 0; i < amigos.length; i++) {
        let itemDaLista = document.createElement("li"); // Cria o list item (<li>)
        itemDaLista.textContent = amigos[i]; // Adiciona o nome do amigo no <li>
        listaAmigosSelecionados.appendChild(itemDaLista); // Adiciona o <li> dentro da <ul>
    }
}

function adicionarAmigo() {
    let nomeInserido = inputNome.value.trim().toUpperCase(); // Pega o texto inserido no campo de entrada, excluindo os "espaços" ao redor do texto
    inputNome.value = "";
    if (!nomeInserido) {    // Se o campo de entrada estiver vazio...
        alert("Por favor, insira um nome!");
        return;
    }

    if (amigos.includes(nomeInserido)) {    // Se o nome do amigo já estiver incluído na lista de amigos...
        alert("Esse nome já está na lista");
        return;
    }
    
    amigos.push(nomeInserido);   // Adiciona o nome na lista de amigos
    atualizarListaDeAmigos();
}

function sortearAmigo() {
    if (!amigos.length) {   // Se a lista de amigos estiver vazia...
        alert("Nenhum amigo foi inserido na lista!");
        return;
    }

    resultadoSorteio.textContent = "";

    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
    let amigoSorteado = amigos[indiceAmigoSorteado]; // Pega o nome do amigo relacionado ao índice anteriormente sorteado
    let itemDaLista = document.createElement("li");
    itemDaLista.textContent = amigoSorteado;
    resultadoSorteio.appendChild(itemDaLista);
}
