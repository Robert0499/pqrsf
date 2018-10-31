angular.module('pqrsf').service('crearSolicitudService', crearSolicitudService);
crearSolicitudService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function crearSolicitudService($http, host, $httpParamSerializerJQLike) {
  this.getTipo = () => {
    return $http.get(host + 'tipo');
  };
  this.addPqrsf = data => {
    return $http.post(host + 'pqrsf', $httpParamSerializerJQLike(data));
  };
  this.getPqrsfId = id => {
    return $http({ method: 'GET', url: host + 'pqrsf', params: { id: id } });
  };
}
