const nome = document.getElementById("nome");
const lista = document.getElementById("lista");

function adicionar() {
  const valor = nome.value.trim();

  if (valor === "") {
    alert("Digite um nome!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${valor}</span>
    <div class="acoes">
      <button onclick="completar(this)">Concluir</button>
      <button onclick="editar(this)">Editar</button>
      <button onclick="remover(this)">Remover</button>
    </div>
  `;

  lista.appendChild(li);

  nome.value = "";
}

function remover(botao) {
  botao.parentElement.parentElement.remove();
}

function completar(botao) {
  const li = botao.parentElement.parentElement;
  li.classList.toggle("riscado");
}

function editar(botao) {
  const li = botao.parentElement.parentElement;
  const span = li.querySelector("span");

  const novoNome = prompt("Editar nome:", span.innerText);

  if (novoNome !== null && novoNome.trim() !== "") {
    span.innerText = novoNome.trim();
  }
}