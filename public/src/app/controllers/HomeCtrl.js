HomeCtrl.$inject = [];

function HomeCtrl() {
  require('particles.js');
  particlesJS.load('particles-js', '/build/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

module.exports = HomeCtrl;