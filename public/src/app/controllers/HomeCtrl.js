HomeCtrl.$inject = ['$rootScope'];

function HomeCtrl($rootScope) {

  //***************************************************
  require('particles.js');
  particlesJS.load('particles-js', 'particles.json');
  console.log('Hi there!');

  //***************************************************
  $rootScope.now = new Date();

  //***************************************************
  var jump = require('jump.js');
  Array.prototype.forEach.call(document.querySelectorAll('.navbar-link'), 
    function (element) {
      element.addEventListener('click', function (event) {
        var target = element.getAttribute('data-target');
        jump(target);
      })
    });

}

module.exports = HomeCtrl;