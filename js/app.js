let amigos = [];

// adicionar amigo
function adicionar() {
    let amigo = document.getElementById('nome-amigo'); //pegar o nome adicionado
    if (amigo.value == '') {
        alert('Informe um nome!');
        return;
    }
    // verifica no array se ja tem "amigos com o mesmo nome" adicionado dentro do array 
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    let lista = document.getElementById('lista-amigos'); // pegar a lista
    amigos.push(amigo.value); // adiciona os nomes dentro da lista
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    } // se na lista nao tiver ninguem vai adicionar, se tiver vai apresentar oque ja estava e acrescentar ', ' + o novo nome
    amigo.value = ''; //apos adicionar, ira deixar o campo limpo para escrever outro nome 

    atualizarLista();
    atualizarSorteio();
}

// sortear dentro da lista 
function sortear() {
    if (amigos.length < 4) {
        alert('Adicione no minino 4 amigos!');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
//o for ira percorrer o elemento inteiro do primeiro elemento da posicao 0, ate o ultimo
    for (let i = 0; i < amigos.length; i++) { 
        // (if) verificar se o 'i' e igual a amigos.length
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'  
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = ' ';
}