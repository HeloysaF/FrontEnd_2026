const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function addTask(){
const textInput = taskInput.value; // pega o valor do input

  if(textInput !== ''){
    const newItem = document.createElement('li');
    newItem.innerHTML = `<span>${textInput}</span>
    <button onclick="editar(this)">Editar</button>
    <button onclick="delet(this)">Remover</button>
    <button onclick="completar(this)">Feito</button>` 
    
    taskList.appendChild(newItem);

    taskInput.value = ''; // limpa o input
  }
}

function editar(button){
 const item =button.parentElement;
  const span=item.querySelector('span');
  const novoTexto=prompt("Editar tarefa",span.innerText);
  if(novoTexto!==null &&novoTexto.trim()!==''){
span.innerText=novoTexto;
}}
function delet(button){
  const itemToRemove=button.parentElement;
  taskList.removeChild(itemToRemove);
  
}
function completar(button){
  const itemToRemove=button.parentElement;
  itemToRemove.classList.toggle('completed');
  
}