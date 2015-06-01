var phonecatApp = angular.module('TracingApp', []);

phonecatApp.controller('TraceListCtrl', function ($scope) {
  $scope.traces = [
    {'id': '1',
     'parentid': '12342132'},
    {'id': '2',
     'parentid': '14341343'},
    {'id': '3',
     'parentid': '13234344'}
  ];
});