angular.module('pqrsf').service('administradorService', administradorService);
administradorService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function administradorService($http, host, $httpParamSerializerJQLike) {
    this.bajar = () => {
        window.location.href = host + 'file';
    };
    this.getUsuarios = (data) => {
        return $http({method: 'GET',url:host + 'usuario', params: {id:data}})
    }
    this.delete = (data) =>{
        return $http({method: 'DELETE',url:host + 'deleteuser', params: {id:data}})        
    }
}
