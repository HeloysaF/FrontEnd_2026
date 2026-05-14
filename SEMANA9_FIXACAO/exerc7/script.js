function analisar(){

  let cartao = document.getElementById("cartao").value;
  cartao = cartao.replace(/\s/g, "");

  if (cartao.length < 13 || cartao.length > 16) {
    document.getElementById("resultado").innerHTML = "Cartão Inválido (tamanho)";
    return;
  }

  // ======================
  // BANDEIRA
  // ======================
  let primeiroDigito = cartao[0];
  let bandeira = "";

  if (primeiroDigito == "4") {
    bandeira = "Visa";
  } else if (primeiroDigito == "5") {
    bandeira = "Mastercard";
  } else if (primeiroDigito == "3") {
    bandeira = "American Express";
  } else if (primeiroDigito == "6") {
    bandeira = "Discover";
  } else {
    bandeira = "Desconhecida";
  }

  // ======================
  // LUHN
  // ======================
  let soma = 0;
  let alternar = false;

  for (let i = cartao.length - 1; i >= 0; i--) {

    let digito = Number(cartao[i]);

    

    if (alternar) {
      digito = digito * 2;

      if (digito > 9) {
        digito = digito - 9;
      }
    }

    soma += digito;
    alternar = !alternar;
  }

  let status = "";
  if (soma % 10 === 0) {
    status = "VÁLIDO";
  } else {
    status = "INVÁLIDO";
  }

  // ======================
  // CATEGORIA (IIN simplificado)
  // ======================
  let categoria = "";

  let setor = cartao[0];

  if (setor == "4" || setor == "5") {
    categoria = "Crédito";
  } else if (setor == "6") {
    categoria = "Débito";
  } else {
    categoria = "Pré-pago / Outro";
  }

  // ======================
  // BANCO (simplificado pelo BIN)
  // ======================
  let bin = cartao.substring(0, 6);
  let banco = "Banco não identificado";

  if (bin.startsWith("400000")) {
    banco = "Banco Visa Exemplo";
  } else if (bin.startsWith("510000")) {
    banco = "Banco Mastercard Exemplo";
  } else {
    banco = "Banco genérico";
  }

  // ======================
  // RESULTADO FINAL
  // ======================
  document.getElementById("resultado").innerHTML =
  `
  Status: ${status} <br>
  Bandeira: ${bandeira} <br>
  Categoria: ${categoria} <br>
  Banco emissor: ${banco}
  `;
}