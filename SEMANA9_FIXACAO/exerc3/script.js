function media() {
const nome = document.getElementById('nome').value;
const n1 = parseFloat(document.getElementById('nota1').value);
const n2 = parseFloat(document.getElementById('nota2').value);
const n3 = parseFloat(document.getElementById('nota3').value);
const resultado = document.getElementById('resultado');

if (nome === "") {
        document.getElementById('resultado').innerText = "Digite o nome";
        return;
    }

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('resultado').innerText = "Digite notas válidas";
        return;
    }

let soma=n1+n2+n3;
let media = soma / 3;
let mediaFinal = media.toFixed(2);

 if (media >= 7) {
        resultado.innerText = `${nome} - Média: ${mediaFinal} → Aprovado`;
        resultado.style.color = "blue";

    } else if (media >= 4) {
        let falta = (10 - media).toFixed(2);
        resultado.innerText = `${nome} - Média: ${mediaFinal} → Exame (faltam ${falta} pontos para 10)`;
        resultado.style.color = "green";

    } else {
        resultado.innerText = `${nome} - Média: ${mediaFinal} → Reprovado`;
        resultado.style.color = "red";
    }
}
