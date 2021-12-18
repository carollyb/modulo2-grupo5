const api_key = 'c30ccb91';
const url = `http://www.omdbapi.com/?apikey=${api_key}&`;

function buscaFilme(nomeFilme) {
  $.ajax({
    type: 'GET',
    url: `${url}t=${nomeFilme}`,
    success: function (data) {
      return data;
    },
  });
}

function buscaFilmeID(idFilme) {
  if (!filmeExiste(idFilme)) {
    $.ajax({
      type: 'GET',
      url: `${url}i=${idFilme}`,
      success: function (data) {
        return data;
      },
    });
  }
}
