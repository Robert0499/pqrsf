angular
  .module('pqrsf')
  .controller('solicitudesController', solicitudesController);
solicitudesController.$inject = [
  '$scope',
  '$state',
  'host',
  'solicitudesService',
  '$sessionStorage'
];
function solicitudesController(
  $scope,
  $state,
  host,
  solicitudesService,
  $sessionStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '1'
  ) {
    $scope.back = () => {
      $state.go('opciones');
    };
    solicitudesService
      .getPqrsf($sessionStorage.usuario.id)
      .then(result => {
        $scope.array = result.data;
        // $sessionStorage.pqrsf = result.data;
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
    $scope.delete = (estado, id) => {
      if (estado == 'Iniciado') {
        solicitudesService
          .deleteS(id)
          .then(result => {
            toastr.success('Eliminado correctamente');
            solicitudesService
              .getPqrsf($sessionStorage.usuario.id)
              .then(result => {
                $scope.array = result.data;
                // $sessionStorage.pqrsf = result.data;
              })
              .catch(err => {
                console.log(err.data);
              });
            console.log(result.data);
          })
          .catch(err => {
            console.log(err.data.message);
          });
      } else {
        toastr.warning('No se puede eliminar');
      }
      // console.log(estado);
    };
  } else {
    $state.go('inicio');
  }
}
