function crearBoton() {
  const texto = document.getElementById('texto').value;
  if (texto.trim() === '') return;
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.className = 'btn btn-outline-secondary';

  document.getElementById('contenedor').appendChild(boton);
  document.getElementById('texto').value = '';
}