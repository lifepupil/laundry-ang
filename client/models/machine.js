'use strict';

angular.module('laundry')
.factory('Machine', function($http, nodeUrl){
  function Machine(){}

  Machine.checkState = function(machine){
    return $http.get(nodeUrl + '/machines/' + machine);
  };
  Machine.changeState = function(machine){
    return $http.put(nodeUrl + '/machines/' + machine);
  };





  return Machine;
});
