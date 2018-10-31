(() => {
  angular.module('pqrsf').config(config);
  config.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'state'
  ];

  function config(
    $httpProvider,
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    state
  ) {
    $httpProvider.defaults.headers['Content-Type'] =
      'Access-Control-Allow-Origin: *';
    $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8;';
    $httpProvider.defaults.headers.put['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    $urlRouterProvider.otherwise('inicio');
    state($stateProvider, 'inicio');
    state($stateProvider, 'recepcionista');
    state($stateProvider, 'registro');
    state($stateProvider, 'bienvenida');
    state($stateProvider, 'administrador');
    state($stateProvider, 'adminNotificaciones');
    state($stateProvider, 'reportes');
    state($stateProvider, 'opciones');
    state($stateProvider, 'crearSolicitud');
    state($stateProvider, 'solicitudes');
    state($stateProvider, 'responsable');
  }
})();
