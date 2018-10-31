angular.module('pqrsf').constant('state', (stateProvider, name) => {
  stateProvider.state(name, {
    url: '/' + name,
    controller: name + 'Controller',
    templateUrl: 'app/View/' + name + '.html',
    resolve: {
      loadMyCtrl: [
        '$ocLazyLoad',
        $ocLazyLoad => {
          return $ocLazyLoad.load([
            {
              files: [
                'app/Controller/' + name + 'Controller.js',
                'app/css/' + name + 'Style.css',
                'app/Model/' + name + 'Service.js'
              ]
            }
          ]);
        }
      ]
    }
  });
});

angular
  .module('pqrsf')
  .constant('host', 'http://192.168.1.65/api-pqrsf/public/api/');

angular
  .module('pqrsf')
  .constant('img', 'http://192.168.1.65/api-pqrsf/imagenes/');
