const api = new Api()

function carregaFilme (){
  let filmeId = localStorage.getItem('id');
  let filmeTitulo = localStorage.getItem('titulo');

  if (filmeId){
    api.buscaFilmeID(filmeId).then((data) => {
      if (!data.Error){
        console.log(data)
        exibeFilme(data)
        localStorage.removeItem('id')
      } else {
        console.log('este filme não existe')
        $('.container').hide()
        $('main').append(`<div>
        <p>Filme não encontrado!</p>
      </div>`)
      }
    })
  } else if (filmeTitulo){
    api.buscaFilme(filmeTitulo).then((data) => {
      if (!data.Error) {
        console.log(data)
        exibeFilme(data)
        localStorage.removeItem('id')
      } else {
        console.log('este filme não existe')
        $('.container').hide()
        $('main').append(`<div>
        <p class = "text-white">Filme não encontrado!</p>
      </div>`)
      } 
    })
  } else {
    console.log('não tem filme')
  }
}

function exibeFilme(data){
  $('#poster').attr('src',data.Poster);
  $('#title').append(`${data.Title}`);
  $('#year').append(`${data.Year}`);
  $('#director').append(`${data.Director}`);
  $('#runtime').append(`${data.Runtime}`);
  $('#language').append(`${data.Language}`);
  $('#plot').append(`${data.Plot}`);
  $('#genre').append(`${data.Genre}`);
  $('#rated').append(`${data.Rated}`);

}
carregaFilme();

/*function preencheFilmeInfo() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo();
    for (let i = 0; i < filmes.length; i++) {
      api
        .buscaFilmeID(filmeId)
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
