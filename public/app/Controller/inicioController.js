angular.module('pqrsf').controller('inicioController', inicioController);
inicioController.$inject = [
  '$scope',
  '$state',
  'host',
  'inicioService',
  '$sessionStorage'
];
function inicioController(
  $scope,
  $state,
  host,
  inicioService,
  $sessionStorage
) {
  $scope.registro = () => {
    $state.go('registro');
  };
  $scope.login = () => {
    inicioService
      .login($scope.user)
      .then(result => {
        $sessionStorage.usuario = result.data.datos;
        if ($sessionStorage.usuario.usuario === '1') {
          toastr.success(result.data.message);
          $state.go('bienvenida');
        } else if ($sessionStorage.usuario.usuario === '2') {
          toastr.success(result.data.message);
          $state.go('recepcionista');
        } else if ($sessionStorage.usuario.usuario === '3') {
          toastr.success(result.data.message);
          $state.go('administrador');
        } else if ($sessionStorage.usuario.usuario === '4') {
          toastr.success(result.data.message);
          $state.go('responsable');
        } else {
          toastr.error('Datos incorrectos');
          $state.go('inicio');
        }
      })
      .catch(err => {
        // console.log(err.data);
        toastr.error(err.data.message);
      });
  };
}
