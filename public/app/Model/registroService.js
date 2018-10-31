angular.module('pqrsf').service('registroService', registroService);
registroService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function registroService($http, host, $httpParamSerializerJQLike) {
  this.getDocumentos = () => {
    return $http.get(host + 'tpd');
  };
}
