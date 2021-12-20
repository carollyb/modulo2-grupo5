const api_key = 'c30ccb91';
const url = `http://www.omdbapi.com/?apikey=${api_key}&`;

function buscaFilme(nomeFilme) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: `${url}t=${nomeFilme}`,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function buscaFilmeID(idFilme) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: `${url}i=${idFilme}`,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

function buscaCEP(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
