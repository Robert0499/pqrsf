angular
  .module('pqrsf')
  .controller('responsableController', responsableController);
responsableController.$inject = [
  '$scope',
  '$state',
  'host',
  'responsableService',
  '$sessionStorage',
  '$localStorage'
];
function responsableController(
  $scope,
  $state,
  host,
  responsableService,
  $sessionStorage,
  $localStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario === '4'
  ) {
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
    responsableService
      .getResp($sessionStorage.usuario.id)
      .then(result => {
        // console.log(result.data);
        $localStorage.responsableD = result.data;
        $scope.array = result.data;
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.update = id => {
      $scope.id_pqr = id;
      const pqrs = $localStorage.responsableD;
      const result = pqrs.find(pqr => parseInt(pqr.id) === id);
      $scope.asunt = result.asunto;
      $scope.creador = result.creador;
      $('#queja').modal('show');
    };
    $scope.respond = () => {
      $scope.user.id_pqr = $scope.id_pqr;
      responsableService
        .addObersevacion($scope.user.id_pqr, $scope.user.obeservacion)
        .then(result => {
          console.log(result.data);
          toastr.success(result.data.message);
          $('#form_rsp')[0].reset();
          $('#queja').modal('hide');
        })
        .catch(err => {
          console.log(err.data);
          toastr.error(err.data.message);
        });
    };
  } else {
    $state.go('inicio');
  }
}
