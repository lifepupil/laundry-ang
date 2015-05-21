'use strict';

angular.module('laundry')
.controller('Home', function($scope, $state, Machine, $interval){
  $interval(checkStatus, 3000);
  checkStatus();
  
  function checkStatus(){
    checkWashState();
    checkDryState();
  }

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
  $scope.changeState = function(machine){
    console.log(machine);
    Machine.changeState(machine)
    .then(function(response){
      // console.log(response);
      // if(machine === 'dryer1')
      checkStatus();
    });
  };
});
