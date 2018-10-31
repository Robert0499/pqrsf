angular.module('pqrsf').service('responsableService', responsableService);
responsableService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function responsableService($http, host, $httpParamSerializerJQLike) {
  this.getResp = id => {
    return $http({
      method: 'GET',
      url: host + 'pqrs',
      params: { id: id }
    });
  };
  this.addObersevacion = (id_pqrs, observacion) => {
    return $http({
      method: 'PUT',
      url: host + 'pqrs',
      params: { id: id_pqrs, observacion, fecha: new Date() }
    });
  };
}
