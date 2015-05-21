'use strict';

angular.module('laundry')
.controller('timelineCtrl', function($scope){
  var container = document.getElementById('visualization');


  // event listener for changes in 

  // Create a DataSet (allows two way data-binding)
  var items = [
    // {id: 1, content: 'item 1', start: '2013-04-20'},
    // {id: 2, content: 'item 2', start: '2013-04-14'},
    // {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2015-05-16', end: '2015-05-19'},
    // {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2015-05-27'},
    // {id: 7, content: 'Christian', start: new Date(1432153765589), end: new Date(1432157494586)}
  ];

  var newItem = {id: 7, content: 'Christian', start: new Date(1432153765589), end: new Date(1432157494586)};
  items.push(newItem);


  var options = {
    showCustomTime: true
  };

  var itemsVis = new vis.DataSet(items);
  var timeline = new vis.Timeline(container, itemsVis, options);

});
