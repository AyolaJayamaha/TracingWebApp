'use strict';

var TimeLineCtrl = angular.module('TimeLineCtrl', ['ui.bootstrap']);
TimeLineCtrl.controller('TraceTimeLineCtrl', function($scope,$http) {
  $scope.page = {
    title: 'Timeline for Trace'
  };

  $scope.chartObject = timeLine;
  $scope.clear = function() {
    var nextid = $scope.chartObject.data.rows.length;
    $scope.chartObject.data.rows.splice(nextid - 1, 1);
  }

  $scope.myItemID = "Trace 01";
  $scope.clearId = function() {
    var count = $scope.chartObject.data.rows.length;
    for (var i = 0; i < count; i++) {
      var obj = $scope.chartObject.data.rows[i];
      if (obj === $scope.myItemID) {
        $scope.chartObject.data.rows.splice(i, 1);
      }
    }
  }
$scope.trace = {};
  $scope.addItemToTimeLine = function(item) {
    //
    
    $http.get('./js/api/trace.json').
  success(function(data, status, headers, config) {
    $scope.trace = data;
    console.log(data);
  }).
  error(function(data, status, headers, config) {
    console.log('error.....');
  });
  //
    var nextid = $scope.chartObject.data.rows.length;
    console.log($scope.chartObject.data.rows);
    console.log($scope.trace);
    //convert from sql to js
    var getDate = function(dateFloat) {
      //var myObj = $.parseJSON('{"date_created":"1273185387"}'),
      var myDate = new Date(1000 * dateFloat);
      return myDate.toString();
    }
    $scope.chartObject.data.rows[nextid] = {
      "c": [{
        "v": "Trace " + nextid
      }, {
        "v": $scope.trace.description
      }, {
        "v": new Date(parseFloat($scope.trace.start_time))
      }, {
        "v": new Date(parseFloat($scope.trace.end_time)+100000)
      }]
    }
  };
});