'use strict';

/**
 * SQL Convert Statement Factory 
 *
 */

angular.module('TracingAppCtrl').factory('StatementFactory', function() {

  var StatementFactory = function(command,tableName) {
    this.command = command;
    this.tableName = tableName;
    this.filters = {};
    this.groupBy = {};
    this.keys = {};
  };

  StatementFactory.setKeys = function(keys) {
    ChartFactory.keys = keys;
  };

  return StatementFactory;
});