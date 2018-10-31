angular.module('pqrsf').service('adminNotificacionesService', adminNotificacionesService);
adminNotificacionesService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function adminNotificacionesService($http, host, $httpParamSerializerJQLike) {
this.getNotificaciones =() =>{
    return $http.get(host+'notificaciones');
}
this.delete =(data) =>{
    return $http({method: 'DELETE',url:host + 'notificacion', params: {id:data}})        
}
}
