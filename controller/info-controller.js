const api = new Api();

function carregaFilme(titulo) {
  let filmeId = localStorage.getItem('id');
  let filmeTitulo = localStorage.getItem('titulo');
  if (titulo) {
    filmeTitulo = titulo;
  }

  if (filmeId) {
    api.buscaFilmeID(filmeId).then((data) => {
      if (!data.Error) {
        exibeFilme(data);
        localStorage.removeItem('id');
      } else {
        semFilme();
      }
    });
  } else if (filmeTitulo) {
    api.buscaFilme(filmeTitulo).then((data) => {
      if (!data.Error) {
        exibeFilme(data);
        localStorage.removeItem('titulo');
      } else {
        semFilme();
      }
    });
  } else {
    semFilme();
  }
}
