function redireciona(){
  let ide = document.querySelector('.filme-catalogo')
  let teste = ide.getAttribute('id')
  localStorage.setItem('id',teste)
  window.location.assign('./view/pages/info.html');
  }

let filmeInfo = localStorage.getItem('id')
console.log(filmeInfo);


function preencheFilmeInfo() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo();
    for (let i = 0; i < filmes.length; i++) {
      api
        .buscaFilmeID(filmeInfo)
        .then(function (data) {
            $('#poster').attr(src,data.Poster);

            $('#title').append(`${data.Title}`);

            $('#year').append(`${data.Year}`);

            $('#director').append(`${data.Director}`);

            $('#runtime').append(`${data.Runtime}`);

            $('#language').append(`${data.Language}`);

            $('#plot').append(`${data.Plot}`);

            $('#genre').append(`${data.Genre}`);

            $('#rated').append(`${data.Rated}`);
            
          
        })
        .then(() => {
          if (i == filmes.length - 1) {
            resolve();
          }
        });
    }
  });
}

/*preencheFilme().then(() => {
  $('.carousel-inner')
    .find('.carousel-item')
    .click((e) => {
      console.log(e.target.id);
    });

  $('.catalogo')
    .find('.card-filme')
    .click((e) => {
      console.log(e.target.id);
    });
});*/
