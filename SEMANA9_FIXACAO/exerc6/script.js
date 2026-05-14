function calcular(){
  const pacote=document.getElementById("pacote").value;
 const qtdPessoa=Number(document.getElementById("qtdPessoa").value);
  
  let preco;
  let totalBase;
  switch(pacote){
    case "pacote1":
      preco=50;
        totalBase=preco*qtdPessoa;
      break;
    case "pacote2":
      preco=80;
        totalBase=preco*qtdPessoa;
      break;
    case "pacote3":
      preco=120;
        totalBase=preco*qtdPessoa;
      break;
  }
  let taxaServico=totalBase*0.10;
  let totalTaxa=totalBase+taxaServico
  
  
  let desconto=0;
  
  if(qtdPessoa>100){
    desconto=totalTaxa*0.05;
}
  let totalFinal = totalTaxa - desconto;
  
  document.getElementById("resultado").innerHTML=`Custo bruto R$ ${totalBase.toFixed(2)}<br>
  Taxa de serviço R$ ${taxaServico.toFixed(2)} <br>
  Desconto aplicado R$ ${desconto.toFixed(2)} <br>
  Total final R$ ${totalFinal.toFixed(2)}<br>`;
}