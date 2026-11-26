const container = document.querySelector('.container');

const minhasImagens = [
  'img/imagem1.jpg',
  'img/imagem2.jpg',
  'img/imagem3.jpg',
  'img/imagem4.jpg',
  'img/imagem5.jpg',
  'img/imagem6.webp'
];

minhasImagens.sort(() => Math.random() - 0.5);

minhasImagens.forEach((caminhoDaImagem) => {
  const img = document.createElement('img');
  img.src = caminhoDaImagem;
  img.alt = 'Minha imagem';
  container.appendChild(img);
});
