HomeCtrl.$inject = ['$rootScope'];

function HomeCtrl($rootScope) {

  require('particles.js');
  particlesJS.load('particles-js', require('../../assets/particles.json'), function() {
    console.log('callback - particles.js config loaded');
  });

  $rootScope.now = new Date();

}

module.exports = HomeCtrl;