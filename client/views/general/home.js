'use strict';

angular.module('laundry')
.controller('Home', function($scope, $state, Machine, $interval, $window){
  $interval(checkStatus, 300000);
  checkStatus();
  var socket = $window.io.connect('http://localhost:8000');
  socket.on('connect', function(){
    console.log('connected');
  });
  // $scope.$on('socket:broadcast', function(event, data){
  //   console.log('message received', event.name);
  //
  // });
  // $scope.$on('Socket:error', function(ev, data){
  //   , Socket, $on
  // });
  // $scope.$on('Socket:connection', function(ev, data){
  //   console.log(data);
  // });
  function checkStatus(){
    checkWashState();
    checkDryState();
  }

  function checkWashState(){
    Machine.checkState('washer1')
    .then(function(response){
      $scope.washStatus = response.data;
    });
  }
  function checkDryState(){
    Machine.checkState('dryer1')
    .then(function(response){
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
