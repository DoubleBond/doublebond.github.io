AboutCtrl.$inject = ['$scope'];
require('gsap');

function AboutCtrl($scope) {

  TweenLite.set('.flip-back', {rotationY: -180});

  $scope.flip = function (selector) {
    var element = angular.element(document.querySelector(selector));
    if (element.hasClass('flipped')) {
      element.removeClass('flipped');
      TweenLite.to(selector, 1.2, {rotationY: 0, ease: Back.easeOut});
    } else {
      element.addClass('flipped');
      TweenLite.to(selector, 1.2, {rotationY: 180, ease: Back.easeOut});
    }
  };

  $scope.jolt = function (selector) {
    var element = angular.element(document.querySelector(selector));
    if (! element.hasClass('flipped')) {
      TweenLite.to(selector, 0.2, {
        rotationY: -15,
        ease: Back.easeOut,
        onComplete: function () {
          TweenLite.to(selector, 0.3, {
            rotationY: 10,
            ease: Back.easeOut,
            onComplete: function () {
              TweenLite.to(selector, 0.1, {rotationY: 0, ease: Back.easeOut});
            }
          })
        }
      })
    }
  };

}

module.exports = AboutCtrl;