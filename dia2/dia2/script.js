
const a= document.getElementById("a");
const b= document.getElementById("b");
const c= document.getElementById("c");


function alterna(){
  a.innerHTML=`
    <h2>Grupo D</h2>
    <h4>Seleções</h4>
    <ul>
      <li>Estados Unidos</li>
      <li>Paraguai</li>
      <li>Austrália</li>
      <li>Turquia</li>
    </ul>
    <details>
    <summary>Saiba Mais </summary>
    <p> Os EUA jogam em casa, vantagem histórica em Copas.
Austrália enfrenta frequentemente seleções sul-americanas em torneios</p>
    </details>
  `;
  b.innerHTML=`<h2>Grupo D</h2>
    <h4>Seleções</h4>
    <ul>
      <li>Alemanha</li>
      <li>Equador</li>
      <li>Costa do Marfim</li>
      <li>Curaçao</li>
    </ul>
     <details>
    <summary>Saiba Mais </summary>
    <p>  Alemanha costuma dominar fases de grupos.
Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
    </details>
  `;
  c.innerHTML=`<h2>Grupo F</h2>
    <h4>Seleções</h4>
    <ul>
      <li>Holanda</li>
      <li>Japão</li>
      <li>Tunísia</li>
      <li>Suécia</li>
    </ul>
     <details>
    <summary>Saiba Mais </summary>
    <p> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
    </details>
  `;
  console.log("Funcionou")
}




    
