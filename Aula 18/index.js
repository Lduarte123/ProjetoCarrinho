// Dados dos produtos (você pode adicionar mais ou buscar de uma API)
const produtos = [
    { nome: "Produto 1", preco: "R$50", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 2", preco: "R$75", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 3", preco: "R$30", imagem: "https://via.placeholder.com/250" },
    { nome: "Produto 4", preco: "R$90", imagem: "https://via.placeholder.com/250" }
];

// Função para criar os cards
function criarCards() {
    // Pegando o container onde os cards serão inseridos
    const conteiner = document.querySelector('.conteiner');

    // Iterando sobre cada produto
    produtos.forEach(produto => {
        // Criando o elemento div do card
        const card = document.createElement('div');
        card.classList.add('card');

        // Criando a imagem
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        // Criando o label do nome
        const label = document.createElement('label');
        label.setAttribute('name', 'CampoNome');
        label.textContent = produto.nome;

        // Criando o span do preço
        const preco = document.createElement('span');
        preco.textContent = produto.preco;

        // Criando o botão
        const botao = document.createElement('button');
        botao.textContent = 'Ver Produtos';
        botao.onclick = MostrarCarrinho; // Mantendo sua função original

        // Adicionando os elementos ao card
        card.appendChild(img);
        card.appendChild(label);
        card.appendChild(preco);
        card.appendChild(botao);

        // Adicionando o card ao container
        conteiner.appendChild(card);
    });
}

// Função placeholder para o botão (substitua pelo que você precisa)
function MostrarCarrinho() {
    alert('Função do carrinho ainda não implementada!');
}

// Executando a função quando a página carregar
window.onload = criarCards;