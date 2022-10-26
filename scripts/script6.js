function abrirRegalo(event) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = 'Felicidades';

  const newImage = document.createElement('img');
  newImage.src = 'giphy.gif';

  const contenedor = document.querySelector('#contenedor');
  contenedor.innerHTML = '';
  contenedor.appendChild(newHeader);
  contenedor.appendChild(newImage);

}

const image = document.querySelector('img');
image.addEventListener('click',abrirRegalo);
