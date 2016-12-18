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
      url: '',
      abstract: true,
      template: require('./templates/layout.html'),
      controller: require('./controllers/HomeCtrl')
    })
    .state('home.about', {
      url: '/',
      template: '<p>About</p><a href="/skills">link</a>',
      controller: require('./controllers/AboutCtrl')
    })
    .state('home.skills', {
      url: '/skills',
      template: '<p>Skills</p><a href="/projects">link</a>'
    })
    .state('home.projects', {
      url: '/projects',
      template: '<p>Projects</p><a href="/contact">link</a>'
    })
    .state('home.contact', {
      url: '/contact',
      template: '<p>Contact</p><a href="/">link</a>'
    });

}

module.exports = app;