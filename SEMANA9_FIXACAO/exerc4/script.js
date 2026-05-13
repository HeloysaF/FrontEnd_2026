function calcula(){
const bandeira=document.getElementById("bandeira").
value;
const valor=Number(document.getElementById("valor").
value);
  const parcelas=Number(document.getElementById("parcelas").
value);
  
  let taxaBandeira=0
  switch(bandeira){
    case "visa":
      taxaBandeira=valor*0.02;
      break;
    case "master":
      taxaBandeira=valor*0.0185;
      break;
    case "elo":
      taxaBandeira=valor*0.03;
      break;
}
  let juros=valor*0.0035*parcelas;
  let taxaM = 12.5 * parcelas;
  let total=valor + taxaBandeira + juros + taxaM;
  let vTotal=total/parcelas
  
  document.getElementById("resultado").innerText=`Taxa R$:  ${ taxaBandeira.toFixed(2)}\n Juros: ${juros.toFixed(2)}\n Valor total: ${total.toFixed(2)}\n Valor da Parcela: ${vTotal.toFixed(2)} `;
  



}