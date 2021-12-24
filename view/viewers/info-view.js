function redireciona(){
    window.location.assign('./view/pages/info.html')
}


/*function preencheFilmeInfo() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo();
    for (let i = 0; i < filmes.length; i++) {
      api
        .buscaFilmeID(filmeEspecifico)
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

preencheFilme().then(() => {
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
