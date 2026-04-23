const nome = document.getElementById("Nome");
   const rank = document.getElementById("Rank");
    const data = document.getElementById("Data_Nas");
    const altura = document.getElementById("Altura");
    const posicao = document.getElementById("Posicao");
    const imagem = document.querySelector(".card-img-top");

function revelar(){    

    // Alterar imagem
    imagem.src = "_vinicius_junior.png";

    // Inserir dados
    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    rank.innerHTML = "9,5";
    data.innerHTML = "12/07/2000 (25 anos)";
    altura.innerHTML = "1,76 m";
    posicao.innerHTML = "Ponta-esquerda / Atacante";

    // Remover placeholders
    nome.classList.remove("placeholder-glow");
    data.classList.remove("placeholder");
    altura.classList.remove("placeholder");
    posicao.classList.remove("placeholder");

    // Aplicar estilo final
    data.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");
console.log("funcionou");
}
    
