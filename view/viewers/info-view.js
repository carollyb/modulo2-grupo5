function exibeFilme(data) {
  comFilme();
  $('#poster').attr('src', data.Poster);
  $('#title').text(`${data.Title}`);
  $('#year').text(`(${data.Year})`);
  $('#director').text(`Dirigido por: ${data.Director}`);
  $('#runtime').text(`Duração: ${data.Runtime}`);
  $('#language').text(`Idioma: ${data.Language}`);
  $('#plot').text(`Plot: ${data.Plot}`);
  $('#genre').text(`Gênero: ${data.Genre}`);
  $('#rated').text(`Classificação: ${data.Rated}`);
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
