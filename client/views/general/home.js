'use strict';

angular.module('laundry')
.controller('Home', function($scope, $state, Machine, $interval, $window, $rootScope){
  $interval(checkStatus, 3000);
  checkStatus();
  // var socket = $window.io.connect('http://localhost:8000');
  // socket.on('connect', function(){
  //   console.log('connected!!!!!');
  // });
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
      $rootScope.washStatus = response.data.state;
      $rootScope.washerHistory = response.data.useHistory;
      console.log('check wash state - response.data.useHistory', response.data.useHistory);
    });
  }
  function checkDryState(){
    Machine.checkState('dryer1')
    .then(function(response){
      $rootScope.dryStatus = response.data.state;
      $rootScope.dryerHistory = response.data.useHistory;
      console.log('check dry state - response.data.useHistory', response.data.useHistory);
    });
  }
  $scope.changeState = function(machine){
    console.log('THIS IS machine in scope change state', machine);
    Machine.changeState(machine)
    .then(function(response){
      // console.log(response);
      // if(machine === 'dryer1')
      // checkStatus();
    });
  };
});
