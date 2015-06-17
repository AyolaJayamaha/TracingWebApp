var TraceApp = angular.module('TracingAppCtrl', [
  'ngRoute',
  'TracingCtrl'
]);

TraceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html'
      }).
      when('/graph', {
        templateUrl: 'partials/graph.html',
        controller: 'TraceFlameChartCtrl'
      }).      
      when('/count-chart', {
        templateUrl: 'partials/nvd3-chart.html',
        controller: 'TraceCountChartCtrl'
      }).
      when('/trace-distribution', {
        templateUrl: 'partials/nvd3-chart.html',
        controller: 'TraceDistChartCtrl'
      }).
	  when('/trace-timeline', {
        templateUrl: 'partials/google-chart.html',
        controller: 'TimeLineCtrl'
      }).
      when('/help', {
        templateUrl: 'partials/help.html'
      }).
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'TraceListCtrl'
      }).
      when('/dependency-tree', {
        templateUrl: 'partials/dependency-tree.html',
        controller: 'TraceDepTreeCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);