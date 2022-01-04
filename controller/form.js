const api = new Api();

$('#cep').blur(function () {
  if (
    $('#cep')
      .val()
      .match(/^[0-9]+$/)
  ) {
    api
      .buscaCEP($('#cep').val())
      .then(function (data) {
        if (data.erro) {
          $('#cep').addClass('erro');
        } else {
          $('#estado').val(data.uf);
          $('#cidade').val(data.localidade);
          $('#bairro').val(data.bairro);
          $('#rua').val(data.logradouro);
        }
      })
      .catch(function () {
        $('#cep').addClass('erro');
      });
  } else {
    $('#cep').addClass('erro');
  }
});

$('#cep').keyup(function () {
  $('#cep').removeClass('erro');
});

function validaEmail(email) {
  let regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  return regex.test(email);
}

$('#botao').click(function (e) {
  e.preventDefault();
  let confirmEmail = validaEmail($('#email').val());
  if (confirmEmail == true) {
    window.location.replace('../../index.html');
  } else {
    $('#email').addClass('erro');
    $('#email').attr('placeholder', 'Email inválido, digite novamente!');
  }
});

$('#email').keyup(function () {
  $('#email').removeClass('erro');
});
