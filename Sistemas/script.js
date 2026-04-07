<script>
const produtos= {
    "123":{"nome": "Jorge e Matheus","preco":9.0000},
    "456": {"nome":"Fala Mansa","preco": 3.000},
    "789": {"nome":"Sabrina","preco" : 12.000},
    "147": {"nome":"Gaucho","preco": 90.000},
}

let carrinho=[];

const audio= new Audio("bip.mp3");

window.onload = ()=>{
    document.getElementById("cod").focus();
}

function addProduto(){
    const codHtml = document.getElementById("cod")
    const qtdHtml = document.getElementById("qtd")

    const valorCod = codHtml.value;
    const valorQtd = qtdHtml.value;

    if(!produto[valorCod]){
        Alertitem();
        return;
    }

    const infoProduto = produtos[valorCod];

    const item={
        nome: infoProduto.nome,
        preco:infoProduto,
        quantidade:valorQtd,
        subtot:infoProduto.preco * valorQtd
    };

    carrinho.push(item);
    audio.currentTime=0;
    audio.play();

    atualizarTela();

    qtdHtml.value=1;
    codHtml.value="";

}

function atualizarTela(){
    const lista = document.getElementById("lista");
    const totalSpan = document.querySelector(".total");
    const subSpan = document.getElementById("sub");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {
        total += item.subtot;

        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                ${item.nome} x${item.quantidade}
                <span>R$ ${item.subtot.toFixed(2)}</span>
            </li>
        ;
    });

    totalSpan.innerText = total.toFixed(2);
    subSpan.innerText = total.toFixed(2);
}
</script> 
