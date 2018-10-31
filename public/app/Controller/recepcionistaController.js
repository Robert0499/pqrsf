angular
  .module('pqrsf')
  .controller('recepcionistaController', recepcionistaController);
recepcionistaController.$inject = [
  '$scope',
  '$state',
  'host',
  'recepcionistaService',
  '$sessionStorage',
  '$localStorage'
];
function recepcionistaController(
  $scope,
  $state,
  host,
  recepcionistaService,
  $sessionStorage,
  $localStorage
) {
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '2'
  ) {
    recepcionistaService
      .getPqrsd()
      .then(result => {
        $sessionStorage.recepPqrs = result.data;
        $scope.array = result.data;
        // console.log($scope.array);
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
    $scope.update = id => {
      $scope.id_pqr = id;
      const pqrs = $sessionStorage.recepPqrs;
      const result = pqrs.find(pqr => parseInt(pqr.id) === id);
      $scope.asunt = result.asunto;
      $scope.creador = result.creador;
      $('#queja').modal('show');
    };
    $scope.asignacion = () => {
      $('#asignar').modal('show');
      $('#queja').modal('hide');
    };
    recepcionistaService
      .getDependencias()
      .then(result => {
        $scope.depen = result.data;
        console.log(result.data);
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.modalC = () => {
      $('#asignar').modal('hide');
      $('#queja').modal('show');
    };
    recepcionistaService
      .getResponsables()
      .then(result => {
        $scope.responsables = result.data;
        console.log(result.data);
      })
      .catch(err => {
        console.log(err.data);
      });
    $scope.asignar = () => {
      $scope.user.id = $scope.id_pqr;
      // console.log($scope.user);
      recepcionistaService
        .Asignar($scope.user)
        .then(result => {
          console.log(result.data.message);
          toastr.success(result.data.message);
          $('#form_a')[0].reset();
          $('#asignar').modal('hide');
        })
        .catch(err => {
          console.log(err.data);
          toastr.error(err.data);
        });
    };
    $scope.notifica = () => {
      $('#queja').modal('hide');
      $('#notificar').modal('show');
    };
    $scope.modalNoti = () => {
      $('#notificar').modal('hide');
      $('#queja').modal('show');
    };
    $scope.nofiticar_f = () => {
      $scope.msg.pqrsf_id = $scope.id_pqr;
      $scope.msg.recepcionista_id = $sessionStorage.usuario.id;
      // console.log($scope.msg);
      $scope.msg.pqrsf_id = $scope.id_pqr;
      recepcionistaService.addNotificacion($scope.msg).then(
        result => {
          console.log(result.data);
          toastr.success(result.data.message);
          $('#notifi')[0].reset();
          $('#notificar').modal('hide');
        },
        err => {
          console.log(err.data);
          toastr.error(err.data.message);
        }
      );
      //   result => {
      //   console.log(result.data);
      //   tostr.success(result.data);
      //   $('#notifi')[0].$reset();
      //   $('#notificar').modal('hide');
      // })
      // .catch(err => {
      //   console.log(err.data);
      //   toastr.error(err.data);
      // });
    };
  } else {
    $state.go('inicio');
  }
}
