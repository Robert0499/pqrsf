angular.module('pqrsf').service('recepcionistaService', recepcionistaService);
recepcionistaService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function recepcionistaService($http, host, $httpParamSerializerJQLike) {
  this.getPqrsd = () => {
    return $http.get(host + 'allpqrsf');
  };
  this.getDependencias = () => {
    return $http.get(host + 'dependencias');
  };
  this.getResponsables = () => {
    return $http.get(host + 'getresponsables');
  };
  this.Asignar = data => {
    return $http({
      method: 'PUT',
      url: host + 'responsables',
      params: data
    });
  };
  this.addNotificacion = data => {
    return $http.post(
      host + 'notificaciones',
      $httpParamSerializerJQLike(data)
    );
  };
}
