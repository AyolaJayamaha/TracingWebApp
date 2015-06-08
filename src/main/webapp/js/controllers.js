var TraceCtrl = angular.module('TracingCtrl', []);

//listing trace from json
TraceCtrl.controller('TraceListCtrl', function ($scope) {
  $scope.traces = sampleTrace;
});

//this will change with after db binding.
TraceCtrl.controller('TraceDepTreeCtrl', function ($scope) {    
$scope.rootId = "-6024241463441346911"; 
    $scope.drawTree = function() {
        loadTree();
        };
  
});