var phonecatApp = angular.module('TracingApp', []);

phonecatApp.controller('TraceListCtrl', function ($scope) {
  $scope.traces = sampleTrace;
});