angular
    .module('pqrsf')
    .controller('administradorController', administradorController);
administradorController.$inject = [
    '$scope',
    '$state',
    'host',
    'administradorService',
    '$sessionStorage',
    'Upload',
    'img'
];
function administradorController(
    $scope,
    $state,
    host,
    administradorService,
    $sessionStorage,
    Upload,
    img
) {
    if (
        typeof $sessionStorage.usuario != 'undefined' &&
        $sessionStorage.usuario.usuario == '3'
    ) {
        $scope.delete=(data)=>{
            administradorService.delete(data).then(result=>{
                administradorService
                .getUsuarios($sessionStorage.usuario.id)
                .then(result => {
                    result.data.forEach(element => {
                        element.foto = img + element.foto;
                    });
                    $scope.usuarios = result.data;

                })
                .catch(err => { });
            }).catch(err=>{});
        }
        $scope.cerrar = () => {
            $sessionStorage.$reset();
            $state.go('inicio');
        };
        $scope.bajar = () => {
            administradorService
                .bajar()
                .then(result => { })
                .catch(err => {
                    console.log(err);
                });
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
        $scope.agregarU = () => {
            $('#agregarU').modal('show');
        };
        $('#icon').click(function () {
            $('input[name=file]').trigger('click');
        });
        $scope.subirExcel = () => {
            Upload.upload({
                url: host + 'addusuario',
                data: {
                    file: $scope.file
                },
                headers: { 'Content-Type': 'application/json' }
            }).then(
                function resp(rsp) {
                    console.log(rsp.data);
                    toastr.success(rsp.data.message);
                    administradorService
                        .getUsuarios($sessionStorage.usuario.id)
                        .then(result => {
                            result.data.forEach(element => {
                                element.foto = img + element.foto;
                            });
                            $scope.usuarios = result.data;

                        })
                        .catch(err => { });
                },
                function err(err) {
                    toastr.error(err.data.message);
                    console.log(err.data);
                }
            );
        }
        administradorService
            .getUsuarios($sessionStorage.usuario.id)
            .then(result => {
                result.data.forEach(element => {
                    element.foto = img + element.foto;
                });
                $scope.usuarios = result.data;

            })
            .catch(err => { });
    } else {
        $state.go('inicio');
    }
}
