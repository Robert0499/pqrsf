angular
  .module('pqrsf')
  .controller('adminNotificacionesController', adminNotificacionesController);
adminNotificacionesController.$inject = [
  '$scope',
  '$state',
  'host',
  'adminNotificacionesService',
  '$sessionStorage'
];
function adminNotificacionesController(
  $scope,
  $state,
  host,
  adminNotificacionesService,
  $sessionStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '3'
  ) {
    $scope.cerrar = () => {
        $sessionStorage.$reset();
        $state.go('inicio');
      };
    $scope.notificaciones = () => {
      $state.go('adminNotificaciones');
    };
    $scope.usuarios = () => {
      $state.go('administrador');
    };
    $scope.reportes = () => {
      $state.go('reportes');
    };
    $scope.delete = (data) => {
      adminNotificacionesService.delete(data)
      .then(result=>{
        toastr.success(result.data.message);                          
        adminNotificacionesService.getNotificaciones()
        .then(result=>{
          $scope.notificaciones = result.data;
          console.log($scope.notificaciones);
        })
        .catch(err=>{});
      })
      .catch(err=>{});
    }
    adminNotificacionesService.getNotificaciones()
    .then(result=>{
      $scope.notificaciones = result.data;
      console.log($scope.notificaciones);
    })
    .catch(err=>{});
  } else {
    $state.go('inicio');
  }
}
