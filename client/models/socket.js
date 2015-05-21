'use strict';

angular.module('laundry')
.factory('Socket', function(socketFactory){
  // var myIoSocket = io.connect()
  var mySocket = socketFactory();
  mySocket.forward('broadcast');
  return mySocket;
});
