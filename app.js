// ===== Juego de Amigo Secreto =====

let jugadores = [];

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  if (jugadores.length === 0) {
    lista.innerHTML = "<li>(sin participantes)</li>";
    return;
  }

  jugadores.forEach(nombre => {
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);
  });
}

function registrar() {
  const campo = document.getElementById('amigo');
  const nombre = campo.value.trim();

  if (nombre === "") {
    alert("⚠️ Debes escribir un nombre antes de agregar.");
    return;
  }

  const repetido = jugadores.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (repetido) {
    alert("Ese nombre ya fue ingresado.");
    return;
  }

  jugadores.push(nombre);
  campo.value = "";
  campo.focus();
  actualizarLista();
}

function elegirSorpresa() {
  if (jugadores.length < 2) {
    alert("Se necesitan al menos 2 nombres para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * jugadores.length);
  const amigo = jugadores[indice];

  const panel = document.getElementById('resultado');
  panel.innerHTML = `<li>🎉 El amigo secreto elegido es: <strong>${amigo}</strong></li>`;
}

// Aliases para que el HTML funcione sin cambios
function agregarAmigo() {
  registrar();
}

function sortearAmigo() {
  elegirSorpresa();
}

document.addEventListener("DOMContentLoaded", () => {
  const entrada = document.getElementById('amigo');
  entrada.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
      registrar();
    }
  });
});
