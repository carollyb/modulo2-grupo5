const api_key = 'c30ccb91';
const url = `http://www.omdbapi.com/?apikey=${api_key}&`;

//NAO FUNCIONAL
function buscaFilme(nomeFilme) {
  $.ajax({
    type: 'GET',
    url: `${url}t=${nomeFilme}`,
    success: function (data) {
      return data;
    },
  });
}

//NAO FUNCIONAL
function buscaFilmeID(idFilme) {
  $.ajax({
    type: 'GET',
    url: `${url}i=${idFilme}`,
    success: function (data) {
      return data;
    },
  });
}

//NAO FUNCIONAL
function buscaCEP(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
}

buscaCEP(1224591)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log('CEP inválido ou não encontrado'));
