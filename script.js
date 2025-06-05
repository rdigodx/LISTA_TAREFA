const entradaTarefa = document.getElementById("entradaTarefa");
const listaTarefas = document.getElementById("listaTarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

let posicaoEditar = undefined;

carregarTarefas();

function adicionarTarefa() {
  let texto = entradaTarefa.value.trim();
  if (texto !== "") {
    tarefas.push(texto);
    entradaTarefa.value = "";
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    carregarTarefas();
  } else {
    alert("Tarefa inválida");
  }
}

entradaTarefa.addEventListener("keypress", function (tecla) {
  if (tecla.key === "Enter") {
    adicionarTarefa();
  }
});

function carregarTarefas() {
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefa, posicao) => {
    const item = document.createElement("li");
    item.className = "item-lista";
    item.innerHTML = `
      <span class="item">${tarefa}</span>
       <button id="botaoRemover" onclick="editarTarefa(${posicao})">Editar</button>
      <button id="botaoRemover" onclick="removerTarefas(${posicao})" class="botaoRemover">X</button>
    `;
    listaTarefas.appendChild(item);
  });
}

function removerTarefas(posicao) {
  tarefas.splice(posicao, 1);
  salvarTarefas();
  carregarTarefas();
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function editarTarefa(posicao) {
  posicaoEditar = posicao;
  entradaTarefa.value = tarefas[posicao];
}
