function validar(){
const cpf=document.getElementById('insira').value;
const limpar=cpf.replace(/\D/g, '');   //pegue tudo que não for número, no texto inteiro
let validez=true;

if(limpar.length !==11){ 
 document.getElementById('resultado').innerText="CPF INVÁLIDO";
    validez = false;
}

if (/^(\d)\1+$/.test(limpar)) {
    validez = false;
}

 //digito 1 
let soma=0;
let multi=0
for(let i=0;i<9;i++){
    multi=limpar[i]*(10-i);
    soma+=multi;
}

let resul=(soma*10)%11;
if( resul==10){
    resul=0;
}

//digito2 
let soma2=0
let multi2=0
for(let i=0;i<10;i++){
    multi=limpar[i]*(11-i);
    soma2+=multi2;
}
let resul2 = (soma2 * 10) % 11;
    if (resul2 === 10){
         resul2 = 0;
        }

    if (resul !== Number(limpar[9]) || resul2 !== Number(limpar[10])) {//Se o primeiro dígito estiver diferente OU o segundo estiver diferente
    validez = false;
}
 const resultado = document.getElementById('resultado');

 if(validez){
    resultado.innerText = "CPF VÁLIDO";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "CPF INVÁLIDO";
        resultado.style.color = "red";
    }
 }
