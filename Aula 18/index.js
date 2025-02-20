// Dados dos produtos
const produtos = [
    { nome: "Produto 1", preco: "R$50", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 2", preco: "R$75", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 3", preco: "R$30", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 4", preco: "R$90", imagem: "https://via.placeholder.com/250" }
];

// Função para criar os cards dos produtos
function criarCards() {
    const conteiner = document.querySelector('.conteiner');
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        const label = document.createElement('label');
        label.setAttribute('name', 'CampoNome');
        label.textContent = produto.nome;

        const preco = document.createElement('span');
        preco.textContent = produto.preco;

        // Botão de adicionar ao carrinho
        const botaoAdicionar = document.createElement('button');
        botaoAdicionar.textContent = 'Adicionar ao Carrinho';
        botaoAdicionar.onclick = () => adicionarAoCarrinho(produto);

        card.appendChild(img);
        card.appendChild(label);
        card.appendChild(preco);
        card.appendChild(botaoAdicionar);

        conteiner.appendChild(card);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para mostrar os itens do carrinho
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const conteinerCarrinho = document.querySelector('.conteiner');
    conteinerCarrinho.innerHTML = '';  // Limpar o conteúdo atual

    if (carrinho.length === 0) {
        conteinerCarrinho.innerHTML = '<h2>Seu carrinho está vazio!</h2>';
        return;
    }

    carrinho.forEach(produto => {
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('item-carrinho');

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.textContent = produto.preco;

        itemCarrinho.appendChild(nome);
        itemCarrinho.appendChild(preco);
        conteinerCarrinho.appendChild(itemCarrinho);
    });

    // Botões de "Comprar" e "Limpar"
    const comprarButton = document.createElement('button');
    comprarButton.textContent = 'Comprar';
    comprarButton.onclick = comprar;

    const limparButton = document.createElement('button');
    limparButton.textContent = 'Limpar Carrinho';
    limparButton.onclick = limparCarrinho;

    conteinerCarrinho.appendChild(comprarButton);
    conteinerCarrinho.appendChild(limparButton);
}

// Função para simular a compra (apenas exibe uma mensagem)
function comprar() {
    alert('Compra realizada com sucesso!');
    localStorage.removeItem('carrinho');
    mostrarCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
    localStorage.removeItem('carrinho');
    mostrarCarrinho();
}

// Função para verificar qual página deve ser exibida
function verificarPagina() {
    const caminho = window.location.pathname;
    if (caminho.includes('carrinho.html')) {
        mostrarCarrinho();
    } else {
        criarCards();
    }
}

// Executando a função ao carregar a página
window.onload = verificarPagina;
