angular.module('pqrsf').controller('opcionesController', opcionesController);
opcionesController.$inject = [
  '$scope',
  '$state',
  'host',
  'opcionesService',
  '$sessionStorage',
  '$localStorage'
];
function opcionesController(
  $scope,
  $state,
  host,
  opcionesService,
  $sessionStorage,
  $localStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '1'
  ) {
    $scope.solicitudes = () => {
      $state.go('crearSolicitud');
    };
    $scope.v_solicitudes = () => {
      if (typeof $localStorage.pqrsf != 'undefined') {
        $state.go('solicitudes');
      } else {
        toastr.info('No hay ninguna solicitud, crea una');
      }
    };
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
  } else {
    $state.go('inicio');
  }
}
