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
                    <img src="${data.Poster}" class="d-inline h-100 filme" alt="..." id="${data.imdbID}">
                    </div>`);
            } else {
              $('.carousel-inner').append(`
                    <div class="carousel-item h-100">
                    <img src="${data.Poster}" class="d-inline h-100 filme" alt="..." id="${data.imdbID}">
                    </div>`);
            }
          } else {
            $('.catalogo').append(`
            <div class="card-filme filme">
            <div class="glass"></div>
            <div class="content"><img src="${data.Poster}" alt="" id="${data.imdbID}" class="filme-catalogo"></div>
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
      localStorage.setItem('id',e.target.id)
      window.location.assign('./view/pages/info.html')
    });

  $('.catalogo')
    .find('.card-filme')
    .click((e) => {
      localStorage.setItem('id',e.target.id)
      window.location.assign('./view/pages/info.html')
    });
});

$('.buscarFilme').click((e) => {
  e.preventDefault();
  let titulo = $('.inputFilme').val();
  if (titulo != '') {
    localStorage.setItem('titulo',titulo)
    $('.inputFilme').val('')
    window.location.assign('./view/pages/info.html')
  }
})
