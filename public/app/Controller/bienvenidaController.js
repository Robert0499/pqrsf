angular
  .module('pqrsf')
  .controller('bienvenidaController', bienvenidaController);
bienvenidaController.$inject = [
  '$scope',
  '$state',
  'host',
  'bienvenidaService',
  '$sessionStorage'
];
function bienvenidaController(
  $scope,
  $state,
  host,
  bienvenidaService,
  $sessionStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '1'
  ) {
    $scope.continuar = () => {
      $state.go('opciones');
    };
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
  } else {
    $state.go('inicio');
  }
}
