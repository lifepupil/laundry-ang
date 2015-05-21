'use strict';

angular.module('laundry')
.controller('timelineCtrl', function($scope, $rootScope){
  var container = document.getElementById('visualization');


  // results of event listener for changes in machine history
  var newWasherItems = $rootScope.washerHistory;
  var newDryerItems = $rootScope.dryerHistory;
  console.log('newItem2', newWasherItems.length);
  var items = [];

  if(newWasherItems.length > 0){
    for(var i = 0; i < newWasherItems.length; i++){
      items.push(newWasherItems[i]);
    }
  } else {
    items.push(newWasherItems);
  }
  if(newDryerItems.length > 0){
    for(var i = 0; i < newDryerItems.length; i++){
      items.push(newDryerItems[i]);
    }
  } else {
    items.push(newDryerItems);
  }

  var itemsVis = new vis.DataSet(items);

  var options = {
    showCustomTime: true
  };

  var timeline = new vis.Timeline(container, itemsVis, options);

});
