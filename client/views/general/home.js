'use strict';

angular.module('laundry')
.controller('Home', function($scope, $state, Machine){
checkWashState();
checkDryState();

  function checkWashState(){
    Machine.checkState('washer1')
    .then(function(response){
      console.log(response.data);
      $scope.washStatus = response.data;
    });
  }
  function checkDryState(){
    Machine.checkState('dryer1')
    .then(function(response){
      console.log(response.data);
      $scope.dryStatus = response.data;
    });
  }
});
