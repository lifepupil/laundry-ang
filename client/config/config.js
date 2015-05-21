'use strict';

angular.module('laundry')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'Home'})
  .state('timeline', {url: '/timeline', templateUrl: '/views/general/timeline.html', controller: 'timelineCtrl'})
  .state('roster', {url: '/roster', templateUrl: '/views/users/roster.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
