const catalog = new Catalogo();
const api = new Api();

//Busca o catalogo com 15 filmes, solicita as informações na API e exibe na tela
function preencheFilme() {
  return new Promise((resolve, reject) => {
    let filmes = catalog.getCatalogo();
    for (let i = 0; i < filmes.length; i++) {
      api
        .buscaFilmeID(filmes[i])
        .then(function (data) {
          if (i < 3) {
            criaItemCarrossel(data);
          } else {
            criaItemCatalogo(data);
          }
        })
        .then(() => {
          if (i == filmes.length - 1) {
            resolve();
          }
        })
        .catch(() => {
          //Exibir mensagem que servidor esta fora ou algo parecido;
        });
    }
  });
}
