angular.module('pqrsf').service('reportesService', reportesService);
reportesService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function reportesService($http, host, $httpParamSerializerJQLike) {
    this.getDependencias = () => {
        return $http.get(host + 'dependencias');
    }
    this.tipo = () => {
        return $http.get(host + 'tipo');
    }
    this.getReportes = (data) => {
        return $http({ method: 'GET', url: host + 'reportes', params: data})
    }
    // this.filtroReport = (data) => {
    //     return $http({ method: 'GET', url: host + 'reportes', params: { id: data } })
    // }
}
