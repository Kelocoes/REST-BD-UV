console.log('Presentado por Kevin Rodriguez');


var formulario = document.getElementsByName('formulario1');
var formulario1 = document.getElementsByName('formulario2');
var formulario2 = document.getElementsByName('formulario3');
var formulario3 = document.getElementsByName('formulario4');


formulario[0].addEventListener('submit', function (e){
  e.preventDefault();
 console.log('Vamos a insertar');
  let datos = new FormData(formulario[0]);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

/* ********************************************************************************************** */
formulario1[0].addEventListener('submit', function (e){
  e.preventDefault();
  console.log('Vamos a actualizar');
  let datos = new FormData(formulario1[0]);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
 });

/* ********************************************************************************************** */
 formulario2[0].addEventListener('submit', function (e){
  e.preventDefault();
  console.log('Vamos a borrar');
  let datos = new FormData(formulario2[0]);
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/eliminarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
 });

/* ********************************************************************************************** */
 formulario3[0].addEventListener('submit', function (e){
  e.preventDefault();
  console.log('Vamos a mostrar');

  fetch('/basedatos/consultatotalpacientes')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
 });


