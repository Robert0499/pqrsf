angular
  .module('pqrsf')
  .controller('crearSolicitudController', crearSolicitudController);
crearSolicitudController.$inject = [
  '$scope',
  '$state',
  'host',
  'crearSolicitudService',
  '$sessionStorage',
  '$localStorage'
];
function crearSolicitudController(
  $scope,
  $state,
  host,
  crearSolicitudService,
  $sessionStorage,
  $localStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '1'
  ) {
    crearSolicitudService
      .getTipo()
      .then(result => {
        console.log(result.data);
        $scope.array = result.data;
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.pqrsf_form = () => {
      $scope.pqrsf.creador_id = $sessionStorage.usuario.id;
      $scope.pqrsf.fecha_inicio = new Date();
      // console.log($scope.pqrsf);
      crearSolicitudService.addPqrsf($scope.pqrsf).then(
        result => {
          crearSolicitudService
            .getPqrsfId($sessionStorage.usuario.id)
            .then(result => {
              $localStorage.pqrsf = result.data;
            })
            .catch(err => {
              console.log(err.data);
            });
          console.log(result.data);
          toastr.success(result.data.message);
          $('#form2')[0].reset();
          $state.go('opciones');
        },
        err => {
          console.log(err.data);
          toastr.error(err.data.message);
        }
      ); /*
      .catch(err => {
        console.log(err.data);
        toastr.error(err.data.message);
	  });*/
    };
    $scope.back = () => {
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
