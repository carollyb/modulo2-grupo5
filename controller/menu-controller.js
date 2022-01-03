$('.buscarFilme').click((e) => {
    e.preventDefault();
    let titulo = $('.inputFilme').val();
    if (titulo != '') {
      localStorage.setItem('titulo', titulo);
      $('.inputFilme').val('');
      window.location.assign('info.html');
    }
  });