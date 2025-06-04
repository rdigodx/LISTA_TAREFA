const entradaTarefa = document.getElementById("entradaTarefa");
const listaTarefas = document.getElementById("listaTarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

carregarTarefas();

function adicionarTarefa() {
  let texto = entradaTarefa.value.trim();
  if (texto != "") {
    tarefas.push(entradaTarefa.value);
    entradaTarefa.value = "";
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    carregarTarefas();
  } else {
    alert("Tarefa inválida");
  }
}

entradaTarefa,
  addEventListener("keypress", function (tecla) {
    if (tecla.key === "Enter") {
      adicionarTarefa();
    }
  });

function carregarTarefas() {
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefas, posicao) => {
    const item = document.createElement("li");
    item.className = "item-lista";
    item.className = `<span class="item">${tarefas}</span>`;
    listaTarefas.appendChild(item);
  });
}
