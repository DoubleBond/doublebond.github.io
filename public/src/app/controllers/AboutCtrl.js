AboutCtrl.$inject = ['$scope'];

function AboutCtrl($scope) {

  $scope.flip = function (selector) {
    var element = angular.element(document.querySelector(selector));
    if (element.hasClass('flipped')) {
      element.removeClass('flipped');
    } else {
      element.addClass('flipped');
    }
  };

}

module.exports = AboutCtrl;