var angular = require("angular");
var uiRouter = require("angular-ui-router");

var app = angular.module('app', [
  'ui.router'
]).config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider', '$compileProvider'];

function config($locationProvider, $urlRouterProvider, $stateProvider, $compileProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./templates/home.html'),
      controller: require('./controllers/HomeCtrl')
    });

  $compileProvider.debugInfoEnabled(false);
  $compileProvider.commentDirectivesEnabled(false);

}

app.controller('AboutCtrl', require('./controllers/AboutCtrl'));
app.controller('ContactCtrl', require('./controllers/ContactCtrl'));
app.controller('ServiceCtrl', require('./controllers/ServiceCtrl'));

module.exports = app;