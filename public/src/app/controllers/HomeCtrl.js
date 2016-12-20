HomeCtrl.$inject = ['$rootScope'];

function HomeCtrl($rootScope) {

  //***************************************************
  require('particles.js');
  particlesJS.load('particles-js', require('../../assets/particles.json'));
  console.log('Hi there! Feel free to sniff my code!');

  //***************************************************
  $rootScope.now = new Date();

}

module.exports = HomeCtrl;