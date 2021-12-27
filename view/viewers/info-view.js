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
        localStorage.removeItem('titulo')
      } else {
        console.log('este filme não existe')
        $('.container').hide()
        $('main').append(`<div>
        <p class = "text-white filmeNaoEncontrado">Filme não encontrado!<br> Por favor, pesquise outro título no catálogo</p>
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
  $('#year').append(`(${data.Year})`);
  $('#director').append(`${data.Director}`);
  $('#runtime').append(`${data.Runtime}`);
  $('#language').append(`${data.Language}`);
  $('#plot').append(`${data.Plot}`);
  $('#genre').append(`${data.Genre}`);
  $('#rated').append(`${data.Rated}`);

}
carregaFilme();