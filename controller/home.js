const catalog = new Catalogo();
const api = new Api();

function preencheFilme() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo();
    for (let i = 0; i < filmes.length; i++) {
      api
        .buscaFilmeID(filmes[i])
        .then(function (data) {
          if (i < 3) {
            if (i === 0) {
              $('.carousel-inner').append(`
                    <div class="carousel-item active h-100">
                    <img src="${data.Poster}" class="d-inline h-100" alt="..." id="${data.imdbID}">
                    </div>`);
            } else {
              $('.carousel-inner').append(`
                    <div class="carousel-item h-100">
                    <img src="${data.Poster}" class="d-inline h-100" alt="..." id="${data.imdbID}">
                    </div>`);
            }
          } else {
            $('.catalogo').append(`
          <div class="">
            <img src="${data.Poster}" alt="">
            <p>${data.Title}</p>
          </div>
          `);
          }
        })
        .then(() => {
          if (i == filmes.length - 1) {
            resolve();
          }
        });
    }
  });
}

preencheFilme().then(() => {
  $('.carousel-inner')
    .find('.carousel-item')
    .click((e) => {
      console.log(e.target.id);
      localStorage.setItem('busca', e.target.id);
    });
});
