'use strict';

angular.module('laundry')
.controller('timelineCtrl', function($scope, $rootScope){
  var container = document.getElementById('visualization');


  // results of event listener for changes in machine history
  var newItems = $rootScope.washerHistory;
  console.log('newItem2', newItems.length);
  // Create a DataSet (allows two way data-binding)
  var items = [
    {id: 4, content: 'Jon', title: 'washer', start: new Date(1432149665589), end: new Date(1432151394586)},
  ];

  var newItem = {id: 7, content: 'Christian', title: 'dryer', start: new Date(1432153765589), end: new Date(1432157494586)};
  items.push(newItem);
  if(newItems.length > 0){
    for(var i = 0; i < newItems.length; i++){
      items.push(newItems[i]);
    }
  } else {
    items.push(newItems);
  }
  var itemsVis = new vis.DataSet(items);

  var options = {
    showCustomTime: true
  };

  var timeline = new vis.Timeline(container, itemsVis, options);

});
