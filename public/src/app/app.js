var angular = require("angular");
var uiRouter = require("angular-ui-router");

var app = angular.module('app', [
  'ui.router'
]).config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

function config($locationProvider, $urlRouterProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./templates/home.html'),
      controller: require('./controllers/HomeCtrl')
    });

}

module.exports = app;