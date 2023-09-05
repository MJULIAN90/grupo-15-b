const url = 'http://localhost:5000';

const  getData = (data) => {
  
  let lista = $('#lista');

  if (!data.length) { return };

  if (data.length > 0) {
    $('img').attr('src', '');
  }
  
  lista.empty();
  for (let i = 0; i < data.length; i++) {
    lista.append(`<li>${data[i].name}</li>`);
  }
}

$('#boton').click(function () {
  $.get(`${url}/amigos`, (data) => {
    console.log('Amigos cargados', data);
    
    getData(data);
    // lista.empty();
    // for (let i = 0; i < data.length; i++) {
    //   lista.append(`<li>${data[i].name}</li>`);
    // }
  })
})

$('#search').click(function () {
  let id = $('#input').val();

  $.get(`${url}/amigos/${id}`, (data) => {
    console.log('Amigo buscado', data);

    if (data.message) {
      $("#amigo").text(data.message);
    } else {
      $("#amigo").text(data.name);
    }
  })
});

$('#delete').click(function () {
  let idDelete = $('#inputDelete').val();

  $.ajax({
    url: `${url}/amigos/${idDelete}`,
    type: 'DELETE',
    success: function (result) {
      console.log('Amigo eliminado', result);
      $('#success').text(`Amigo con id ${idDelete} eliminado`);
      getData(result);
    },
    error: function (error) {
      console.log('Error', error);
    }
  });
});

