angular.module('pqrsf').controller('registroController', registroController);
registroController.$inject = [
  '$scope',
  '$state',
  'host',
  'registroService',
  '$sessionStorage',
  'Upload'
];
function registroController(
  $scope,
  $state,
  host,
  registroService,
  $sessionStorage,
  Upload
) {
  $('#icon2').click(function() {
    $('input[name=file]').trigger('click');
  });

  $scope.registroC = () => {
    Upload.upload({
      url: host + 'register',
      data: {
        foto: $scope.foto,
        nombre: $scope.cliente.nombre,
        tipo_documento: $scope.cliente.tipo_documento,
        numero_documento: $scope.cliente.numero_documento,
        correo: $scope.cliente.correo,
        usuario: $scope.cliente.usuario,
        contrasena: $scope.cliente.contrasena
      },
      headers: { 'Content-Type': 'application/json' }
    }).then(
      function resp(rsp) {
        console.log(rsp.data);
        $('#form1')[0].reset();
        toastr.success(rsp.data.message);
        $state.go('inicio');
      },
      function err(err) {
        toastr.error(err.data.message);
        console.log(err.data);
      }
    );
  };
  $scope.back = () => {
    $state.go('inicio');
  };
  registroService
    .getDocumentos()
    .then(result => {
      $scope.array = result.data;
    })
    .catch(err => {
      console.log(err.data);
    });
}
