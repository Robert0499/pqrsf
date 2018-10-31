angular.module('pqrsf').controller('reportesController', reportesController);
reportesController.$inject = [
  '$scope',
  '$state',
  'host',
  'reportesService',
  '$sessionStorage'
];
function reportesController(
  $scope,
  $state,
  host,
  reportesService,
  $sessionStorage
) {
  $scope.dependenciaid='ninguno';
  $scope.tipoid='ninguno'
  var ctx = $('#myChart');
  if (
    typeof $sessionStorage.usuario != 'undefined' &&
    $sessionStorage.usuario.usuario == '3'
  ) {
    $scope.ninguno = 'ninguno';
    $scope.numero = 1;
    $scope.cerrar = () => {
      $sessionStorage.$reset();
      $state.go('inicio');
    };
    $scope.notificaciones = () => {
      $state.go('adminNotificaciones');
    };
    $scope.downloadExcel=()=>{
      if (isNaN($scope.dependenciaid) === false && isNaN($scope.tipoid) === false) {
        console.log('lleno');
      window.location.href = host + 'excel?dependencia_id='+$scope.dependenciaid+'&tipo_id='+$scope.tipoid; 
             
      } else if (isNaN($scope.dependenciaid) === false && $scope.tipoid === 'ninguno') {
        console.log('tipo está vacio');
      window.location.href = host + 'excel?dependencia_id='+$scope.dependenciaid;        
      } else if ($scope.dependenciaid === 'ninguno' && isNaN($scope.tipoid) === false) {
        console.log('dependencia está vacio');
      window.location.href = host + 'excel?tipo_id='+$scope.tipoid;        
      } else {
      window.location.href = host + 'excel';
      }
    }
    $scope.downloadPdf=()=>{
      if (isNaN($scope.dependenciaid) === false && isNaN($scope.tipoid) === false) {
        console.log('lleno');
      window.open(host + 'pdf?dependencia_id='+$scope.dependenciaid+'&tipo_id='+$scope.tipoid),'_blank'; 
             
      } else if (isNaN($scope.dependenciaid) === false && $scope.tipoid === 'ninguno') {
        console.log('tipo está vacio');
      window.open(host + 'pdf?dependencia_id='+$scope.dependenciaid),'_blank';        
      } else if ($scope.dependenciaid === 'ninguno' && isNaN($scope.tipoid) === false) {
        console.log('dependencia está vacio');
      window.open(host + 'pdf?tipo_id='+$scope.tipoid),'_blank';        
      } else {
      window.open(host + 'pdf'),'_blank';
      }
    }
    $scope.usuarios = () => {
      $state.go('administrador');
    };
    $scope.reportes = () => {
      $state.go('reportes');
    };
    $scope.select = () => {
        if (isNaN($scope.dependenciaid) === false && isNaN($scope.tipoid) === false) {
          console.log('lleno');
          reportesService
          .getReportes({dependencia_id: $scope.dependenciaid, tipo_id: $scope.tipoid})
          .then(result => {
            $scope.report = result.data.meses;          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [
                  'Enero',
                  'Febrero',
                  'Marzo',
                  'Abril',
                  'Mayo',
                  'Junio',
                  'Julio',
                  'Agosto',
                  'Septiembre',
                  'Octubre',
                  'Noviembre',
                  'Diciembre'
                ],
                datasets: [
                  {
                    label: '# Meses',
                    data: $scope.report,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(2, 99, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(237, 237, 31, 0.2)',
                      'rgba(20, 230, 132, 0.2)',
                      'rgba(246, 27, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(2, 80, 132, 0.2)',
                      'rgba(198, 70, 164, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(45, 19, 132, 0.2)',
                      'rgba(246, 99, 132, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(2, 99, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(237, 237, 31, 1)',
                      'rgba(20, 230, 132, 1)',
                      'rgba(246, 27, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(2, 80, 132, 1)',
                      'rgba(198, 70, 164, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(45, 19, 132, 1)',
                      'rgba(246, 99, 132, 1)'
                    ],
                    borderWidth: 1
                  }
                ]
              }
            });
          }).catch(err => {})
        } else if (isNaN($scope.dependenciaid) === false && $scope.tipoid === 'ninguno') {
          console.log('tipo está vacio');
          reportesService
          .getReportes({dependencia_id: $scope.dependenciaid})
          .then(result => {
            $scope.report = result.data.meses;
            var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [
                  'Enero',
                  'Febrero',
                  'Marzo',
                  'Abril',
                  'Mayo',
                  'Junio',
                  'Julio',
                  'Agosto',
                  'Septiembre',
                  'Octubre',
                  'Noviembre',
                  'Diciembre'
                ],
                datasets: [
                  {
                    label: '# Meses',
                    data: $scope.report,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(2, 99, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(237, 237, 31, 0.2)',
                      'rgba(20, 230, 132, 0.2)',
                      'rgba(246, 27, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(2, 80, 132, 0.2)',
                      'rgba(198, 70, 164, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(45, 19, 132, 0.2)',
                      'rgba(246, 99, 132, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(2, 99, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(237, 237, 31, 1)',
                      'rgba(20, 230, 132, 1)',
                      'rgba(246, 27, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(2, 80, 132, 1)',
                      'rgba(198, 70, 164, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(45, 19, 132, 1)',
                      'rgba(246, 99, 132, 1)'
                    ],
                    borderWidth: 1
                  }
                ]
              }
            });
          }).catch(err => {})
        } else if ($scope.dependenciaid === 'ninguno' && isNaN($scope.tipoid) === false) {
          console.log('dependencia está vacio');
          reportesService
          .getReportes({tipo_id: $scope.tipoid})
          .then(result => {
            $scope.report = result.data.meses;
            var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [
                  'Enero',
                  'Febrero',
                  'Marzo',
                  'Abril',
                  'Mayo',
                  'Junio',
                  'Julio',
                  'Agosto',
                  'Septiembre',
                  'Octubre',
                  'Noviembre',
                  'Diciembre'
                ],
                datasets: [
                  {
                    label: '# Meses',
                    data: $scope.report,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(2, 99, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(237, 237, 31, 0.2)',
                      'rgba(20, 230, 132, 0.2)',
                      'rgba(246, 27, 132, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(2, 80, 132, 0.2)',
                      'rgba(198, 70, 164, 0.2)',
                      'rgba(93, 99, 132, 0.2)',
                      'rgba(45, 19, 132, 0.2)',
                      'rgba(246, 99, 132, 0.2)'
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(2, 99, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(237, 237, 31, 1)',
                      'rgba(20, 230, 132, 1)',
                      'rgba(246, 27, 132, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(2, 80, 132, 1)',
                      'rgba(198, 70, 164, 1)',
                      'rgba(93, 99, 132, 1)',
                      'rgba(45, 19, 132, 1)',
                      'rgba(246, 99, 132, 1)'
                    ],
                    borderWidth: 1
                  }
                ]
              }
            });
          }).catch(err => {})
        } else {
          reportesService
            .getReportes()
            .then(result => {
              $scope.report = result.data.meses;
              var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                  ],
                  datasets: [
                    {
                      label: '# Meses',
                      data: $scope.report,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(2, 99, 132, 0.2)',
                        'rgba(93, 99, 132, 0.2)',
                        'rgba(237, 237, 31, 0.2)',
                        'rgba(20, 230, 132, 0.2)',
                        'rgba(246, 27, 132, 0.2)',
                        'rgba(93, 99, 132, 0.2)',
                        'rgba(2, 80, 132, 0.2)',
                        'rgba(198, 70, 164, 0.2)',
                        'rgba(93, 99, 132, 0.2)',
                        'rgba(45, 19, 132, 0.2)',
                        'rgba(246, 99, 132, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(2, 99, 132, 1)',
                        'rgba(93, 99, 132, 1)',
                        'rgba(237, 237, 31, 1)',
                        'rgba(20, 230, 132, 1)',
                        'rgba(246, 27, 132, 1)',
                        'rgba(93, 99, 132, 1)',
                        'rgba(2, 80, 132, 1)',
                        'rgba(198, 70, 164, 1)',
                        'rgba(93, 99, 132, 1)',
                        'rgba(45, 19, 132, 1)',
                        'rgba(246, 99, 132, 1)'
                      ],
                      borderWidth: 1
                    }
                  ]
                }
              });
            }).catch(err => {})
        }
    }
      reportesService
        .getReportes()
        .then(result => {
          $scope.report = result.data.meses;
          console.log();
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
              ],
              datasets: [
                {
                  label: '# Meses',
                  data: $scope.report,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(2, 99, 132, 0.2)',
                    'rgba(93, 99, 132, 0.2)',
                    'rgba(237, 237, 31, 0.2)',
                    'rgba(20, 230, 132, 0.2)',
                    'rgba(246, 27, 132, 0.2)',
                    'rgba(93, 99, 132, 0.2)',
                    'rgba(2, 80, 132, 0.2)',
                    'rgba(198, 70, 164, 0.2)',
                    'rgba(93, 99, 132, 0.2)',
                    'rgba(45, 19, 132, 0.2)',
                    'rgba(246, 99, 132, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(2, 99, 132, 1)',
                    'rgba(93, 99, 132, 1)',
                    'rgba(237, 237, 31, 1)',
                    'rgba(20, 230, 132, 1)',
                    'rgba(246, 27, 132, 1)',
                    'rgba(93, 99, 132, 1)',
                    'rgba(2, 80, 132, 1)',
                    'rgba(198, 70, 164, 1)',
                    'rgba(93, 99, 132, 1)',
                    'rgba(45, 19, 132, 1)',
                    'rgba(246, 99, 132, 1)'
                  ],
                  borderWidth: 1
                }
              ]
            }
          });
        })
        .catch(err => { });
      reportesService
        .getDependencias()
        .then(result => {
          $scope.dependencias = result.data;
        })
        .catch(err => { });
      reportesService
        .tipo()
        .then(result => {
          $scope.tipos = result.data;
        })
        .catch(err => { });
    } else {
      $state.go('inicio');
    }
  }
