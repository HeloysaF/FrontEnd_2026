const cria = document.getElementById("mainImage")
const btn  = document.getElementById("btnImage")




const estados={
    normal: "img1.png",
    puto: "img3.png",
    morto:"img4.png",
    comendo:"img5.png",
    alimentado:"img2.png",
    dormindo:"img7.png",

}
let nomeCriatura = "";
let tempoTransicao = 1000;
let estaNoite = false;
let contador=0;
let intervalo=null;
let time_click=null;
let time_out=null;
let modoNoite = false;
let horas = 8;           // começa de manhã
let relogioIntervalo;    // guarda o setInterval

function controlador(){
     if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        console.log("Contador:", contador);

        if (contador === 30) {
            console.log("Ficou puto");
            cria.src = estados.puto;
        }

        if (contador === 60) {
            console.log("Morreu");
            cria.src = estados.morto;
            clearInterval(intervalo);
        }

    }, 1000);
}
    function alimentar(){
         if (document.body.classList.contains("noite")) {
        console.log("A criatura está dormindo...");
        return;
    }
    cria.src = estados.comendo;
    contador = 0;
    if (intervalo) clearInterval(intervalo);
    setTimeout(() => {
        cria.src = estados.alimentado;
        setTimeout(() => {
            cria.src = estados.normal;
            controlador(); // volta a contar tempo
        }, 2000);
    }, 1000);
}







function atualizarFundo() {
    if (relogioIntervalo) clearInterval(relogioIntervalo);

    relogioIntervalo = setInterval(() => {
        horas++;

        if (horas >= 24) horas = 0;

        console.log("Hora:", horas);

        const agoraNoite = (horas >= 18 || horas < 6);

        if (agoraNoite && !estaNoite) {
            estaNoite = true;
            console.log("Mudou para noite");
            document.body.classList.add("noite");
            criaturaDormir();
        }

        if (!agoraNoite && estaNoite) {
            estaNoite = false;
            console.log("Mudou para dia");
            document.body.classList.remove("noite");
            criaturaAcordar();
        }

    }, 8000);
}



 function alternarTema(estaNoite) {
 console.log("Modo noite:", estaNoite);

    if (estaNoite) {
        document.body.classList.add("noite");

        // espera o fundo escurecer antes de dormir
        setTimeout(() => {
            criaturaDormir();
        }, tempoTransicao);

    } else {
        document.body.classList.remove("noite");

        // acorda imediatamente ao amanhecer
        criaturaAcordar();
    }
}

function criaturaDormir() {
    cria.src = estados.dormindo;

    if (intervalo) clearInterval(intervalo); // pausa fome
}

function criaturaAcordar() {
    cria.src = estados.normal;
    contador = 0;
    controlador();
}

function criarEstrelaCadente() {
    const estrela = document.createElement("div");
    estrela.className = "estrela-cadente";

    // começa em posição aleatória no topo
    estrela.style.top = "-50px";
    estrela.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(estrela);

    // remove após a animação
    setTimeout(() => {
        estrela.remove();
    }, 1000);
}
setInterval(() => {
    if (document.body.classList.contains("noite")) {
        // 30% de chance de aparecer
        if (Math.random() < 0.3) {
            criarEstrelaCadente();
        }
    }
}, 3000);
function salvarNome() {
    nomeCriatura = document.getElementById("nomeCriatura").value;
    
    document.getElementById("nomeExibido").textContent = nomeCriatura;

    console.log(nomeCriatura);
}

    controlador();
    atualizarFundo();

  
