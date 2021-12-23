class Api {
  api_key = 'c30ccb91';
  url = `http://www.omdbapi.com/?apikey=${this.api_key}&`;

  buscaFilme(nomeFilme) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: `${this.url}t=${nomeFilme}`,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  buscaFilmeID(idFilme) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: `${this.url}i=${idFilme}`,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  buscaCEP(cep) {
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
}
