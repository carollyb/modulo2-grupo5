function exibeFilme(data) {
  comFilme();
  $('#poster').attr('src', data.Poster);
  $('#title').append(`${data.Title}`);
  $('#year').append(`(${data.Year})`);
  $('#director').append(`${data.Director}`);
  $('#runtime').append(`${data.Runtime}`);
  $('#language').append(`${data.Language}`);
  $('#plot').append(`${data.Plot}`);
  $('#genre').append(`${data.Genre}`);
  $('#rated').append(`${data.Rated}`);
}

function semFilme() {
  $('.displayFilme').addClass('d-none');
  $('.semFilme').removeClass('d-none');
}

function comFilme() {
  $('.displayFilme').removeClass('d-none');
  $('.semFilme').addClass('d-none');
}

$('.buscarFilme').click((e) => {
  e.preventDefault();
  carregaFilme($('.inputFilme').val());
  $('.inputFilme').val('');
});

carregaFilme();
