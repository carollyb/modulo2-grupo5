const catalog = new Catalogo();

function preencheFilme() {
  let filmes = catalog.getCatalogo();
  for (let i = 0; i < 3; i++) {
    buscaFilmeID(filmes[i]).then(function (data) {
      if (i === 0) {
        $('.carousel-inner').append(`
                <div class="carousel-item active">
                <img src="${data.Poster}" class="img-carrossel" alt="...">
                <div class="carousel-caption d-none d-md-block h-50 w-25">
                <h1 class="titulo-carr display-4">${data.Title}</h1>
                </div>`);
      } else {
        $('.carousel-inner').append(`
                <div class="carousel-item">
                <img src="${data.Poster}" class="img-carrossel" alt="...">
                <div class="carousel-caption d-none d-md-block h-50 w-25">
                <h1 class="titulo-carr display-4">${data.Title}</h1>
                </div>`);
      }
    });
  }
}

preencheFilme();
