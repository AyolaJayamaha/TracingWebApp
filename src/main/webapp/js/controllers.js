'use strict';

var TraceCtrl = angular.module('TracingCtrl', ['nvd3', 'googlechart', 'ui.bootstrap']);

//listing trace from json
TraceCtrl.controller('TraceListCtrl', function($scope) {
  $scope.traces = sampleTrace;
});

//this will change with after db binding.
TraceCtrl.controller('TraceDepTreeCtrl', function($scope) {
  $scope.rootId = "-6024241463441346911";
  $scope.drawTree = function() {
    loadTree();
  }
});

TraceCtrl.controller('TraceFlameChartCtrl', function($scope) {

  $scope.drawSmokeChart = function() {
    console.log('drawing.....');
    var smoke = new SmokeChart('#mydiv', 800, 400, 100, 100);
    var smoked_data = [
      [38, 3, 3, 3, 38, 38],
      [12, 4, 4, 4, 12, 12],
      [8, 7, 7, 7, 8, 8],
      [9, 26, 26, 26, 9, 9],
      [11, 6, 6, 6, 11, 11],
      [8, 11, 11, 11, 8, 8],
      [10, 3, 3, 3, 10, 10],
      [8, 5, 5, 5, 8, 8],
      [8, 2, 2, 2, 8, 8],
      [80, 4, 4, 4, 80, 8],
      [8, 5, 5, 5, 8, 8],
      [8, 3, 3, 3, 8, 8],
      [11, 2, 2, 2, 11, 11],
      [11, 7, 7, 7, 11, 11],
      [96, 3, 3, 3, 96, 96],
      [9, 3, 3, 3, 9, 9],
      [8, 3, 3, 3, 8, 8],
      [90, 5, 5, 5, 90, 9],
      [27, 5, 5, 5, 27, 27],
      [8, 2, 2, 2, 8, 8],
      [9, 2, 2, 2, 9, 9],
      [9, 4, 4, 4, 9, 9],
      [9, 3, 3, 3, 9, 9],
      [15, 3, 3, 3, 15, 15],
      [8, 3, 3, 3, 8, 8],
      [9, 3, 3, 3, 9, 9],
      [90, 10, 10, 10, 90, 9],
      [10, 2, 2, 2, 10, 10],
      [12, 2, 2, 2, 12, 12],
      [9, 20, 20, 20, 9, 9],
      [8, 3, 3, 3, 8, 8],
      [9, 2, 2, 2, 9, 9],
      [11, 2, 2, 2, 11, 11],
      [9, 6, 6, 6, 9, 9],
      [8, 2, 2, 2, 8, 8],
      [42, 3, 3, 3, 42, 42],
      [30, 4, 4, 4, 30, 30],
      [8, 3, 3, 3, 8, 8],
      [8, 2, 2, 2, 8, 8],
      [8, 3, 3, 3, 8, 8],
      [10, 2, 2, 2, 10, 10],
      [9, 3, 3, 3, 9, 9],
      [9, 3, 3, 3, 9, 9],
      [8, 3, 3, 3, 8, 8],
      [8, 2, 2, 2, 8, 8],
      [23, 7, 7, 7, 23, 23],
      [14, 6, 6, 6, 14, 14],
      [9, 4, 4, 4, 9, 9],
      [10, 6, 6, 6, 10, 10],
      [8, 3, 3, 3, 8, 8],
      [9, 4, 4, 4, 9, 9],
      [9, 2, 2, 2, 9, 9],
      [9, 3, 3, 3, 9, 9],
      [14, 3, 3, 3, 14, 14],
      [9, 7, 7, 7, 9, 9],
      [12, 3, 3, 3, 12, 12],
      [10, 3, 3, 3, 10, 10],
      [44, 25, 25, 25, 44, 44],
      [8, 4, 4, 4, 8, 8],
      [9, 2, 2, 2, 9, 9],
      [9, 4, 4, 4, 9, 9],
      [18, 2, 2, 2, 18, 18],
      [13, 3, 3, 3, 13, 13],
      [12, 2, 2, 2, 12, 12],
      [8, 7, 7, 7, 8, 8],
      [14, 4, 4, 4, 14, 14]
    ];
    smoke.addLine('traffic', smoked_data, "#900", "#999")
      .addGuide('zero', 0, '#000')
      .addGuide('capacity', 160000, '#f00')
      .showLabels(['6:00', '12:00', '18:00', '0:00']);

  };
});

TraceCtrl.controller('TraceCountChartCtrl', function($scope) {
  $scope.page = {
    title: 'Trace Count Chart Graph'
  };
  $scope.options = barChart.options;
  $scope.data = barChart.data;

});
TraceCtrl.controller('TraceDistChartCtrl', function($scope) {
  $scope.options = barChart.options;

  $scope.setChartType = function (chartType){
    console.log($scope.options.chart.type);
    $scope.options.chart.type = chartType;
  }

  $scope.page = {
    title: 'Trace Distribution'
  };
  $scope.data = barChart.data;
  $scope.distributeTypes = [
      {name:'By Time'},
      {name:'By Nodes'}
    ];
  $scope.myDistributeType = $scope.distributeTypes[0];
});