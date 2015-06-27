'use strict';

/**
 * this services was writtern following different pattern.
 * Generate Statement Service mainly converting SQL Statement to Tracing Decription Label
 * To-Do Switching controllers to this pattern of coding
 *
 */


angular.module('TracingAppCtrl').service('GenerateStatementService', function() {

  /*using statement facotry - It is in progress*/
  var SQLQuery = null;
  var tracingStatement = null;
  //following Grammar @ http://phoenix.apache.org/language/index.html
  //To-Do this model will improve as developing is going on
  var SQLQueryObject = {
   commands :{},
   keys :[],
   schema:null,
   tabel: null,
   filters: {},
   groupBy: {},
   orderBy: {},
   limits :{}
  }

  this.setSQLQuery = function(sqlQuery) {
    SQLQuery = sqlQuery;
  };

  this.getSQLQuery = function() {
    return SQLQuery;
  };

  this.getTracingStatement = function() {
  	//will using partitioningSQLQuery to convert SQL to TracingStatement
    return tracingStatement;
  };

  //sql statements partitioning
  function partitioningSQLQuery() {
  //Building SQLQueryObject
  };

});