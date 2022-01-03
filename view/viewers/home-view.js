//Cria elemento para o carrossel
function criaItemCarrossel(data) {
  $('.carousel-inner').append(`
  <div class="carousel-item h-100">
  <img src="${data.Poster}" class="d-inline filme h-100" alt="..." id="${data.imdbID}">
  </div>
  `);
}

//Cria elemento para o catalogo de filmes
function criaItemCatalogo(data) {
  $('.catalogo').append(`
  <div class="card-filme">
  <div class="glass"></div>
  <div class="content"><img src="${data.Poster}" alt="" id="${data.imdbID}" class="filme-catalogo filme"></div>
  </div>
  `);
}

// Preenche a tela comm os filmes e adiciona o evento Click nos filmes
preencheFilme().then(() => {
  $('.carousel-item').first().addClass('active');
  $('.filme').click((e) => {
    localStorage.setItem('id', e.target.id);
    window.location.assign('./view/pages/info.html');
  });
});