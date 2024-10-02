let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').innerHTML='R$ 0';

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto= produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let subtotal = precoProduto* quantidade;

    let ListaDoCarrinho = document.getElementById('lista-produtos');
    ListaDoCarrinho.innerHTML +=  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`
    ;

    totalGeral = totalGeral + subtotal;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = '';
}



function limpar(){
    let ListaDoCarrinho = document.getElementById('lista-produtos');
    ListaDoCarrinho.innerHTML='';

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ 0`;
}