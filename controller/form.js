$('#cep').blur(function () {
  if (
    $('#cep')
      .val()
      .match(/^[0-9]+$/)
  ) {
    buscaCEP($('#cep').val())
      .then(function (data) {
        if (data.erro) {
          console.log('CEP inválido');
        } else {
          $('#estado').val(data.uf);
          $('#cidade').val(data.localidade);
          $('#bairro').val(data.bairro);
          $('#rua').val(data.logradouro);
        }
      })
      .catch(function () {
        console.log('CEP inexistente');
      });
  } else {
    console.log('Verifique o CEP');
  }
});
$('.buscarFilme').click((e) => {
  e.preventDefault();
  let titulo = $('.inputFilme').val();
  if (titulo != '') {
    localStorage.setItem('titulo',titulo)
    $('.inputFilme').val('')
    window.location.assign('info.html')
  }
})
