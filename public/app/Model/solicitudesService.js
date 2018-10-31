angular.module('pqrsf').service('solicitudesService', solicitudesService);
solicitudesService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function solicitudesService($http, host, $httpParamSerializerJQLike) {
  this.getPqrsf = id => {
    return $http({
      method: 'GET',
      url: host + 'pqrsf',
      params: { id: id }
    });
  };
  this.deleteS = id => {
    return $http({
      method: 'DELETE',
      url: host + 'deletepqrsf',
      params: { id: id }
    });
  };
}
