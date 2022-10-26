function abrirRegalo(event) {
  const image = event.currentTarget;
  image.removeEventListener = ('click',abrirRegalo);

  const abierto = document.querySelector('#regalo-abierto');
  const cerrado = document.querySelector('#regalo-cerrado');

  abierto.classList.remove('oculto');
  cerrado.classList.add('oculto');

}

const image = document.querySelector('#regalo-cerrado img');
image.addEventListener('click',abrirRegalo);
