 function mudarTexto(){
    const texto = document.getElementById("titulo");
    titulo.textContent = "Titulo alterado com Js!";
}

function mudarCor(){
    const p = document.getElementById("paragrafo");
    p.style.color = "red";
    p.style.frontWeight = "bold";
    paragrafo.textContent = "Paragrafo alterado com Sucesso!";
}

function adicionarItem(){
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = "Item adicionado!";
    lista.appendChild(novoItem);
}

function removerUltimoItem(){
    const lista = document.getElementById("lista2");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
}

function destacar(){
    const caixa = document.getElementById("caixa");
    caixa.style.background = "orange";
}

function removerDestaque(){
    const caixa = document.getElementById("caixa");
    caixa.style.background = "lightblue";
}
                          