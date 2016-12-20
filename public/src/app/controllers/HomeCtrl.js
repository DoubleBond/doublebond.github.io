HomeCtrl.$inject = ['$rootScope'];

function HomeCtrl($rootScope) {

  //***************************************************
  require('particles.js');
  particlesJS.load('particles-js', 'particles.json');
  console.log('Hi there!');

  //***************************************************
  $rootScope.now = new Date();

}

module.exports = HomeCtrl;