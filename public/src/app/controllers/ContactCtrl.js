ContactCtrl.$inject = ['$scope', '$http'];

function ContactCtrl($scope, $http) {

  $scope.mail = {};

  $scope.send = function (form) {
    $http.post('/api/contact', $scope.mail)
      .then(function (res) {

      }, function (res) {

      });
    $scope.reset(form);
  };

  $scope.reset = function (form) {
    $scope.mail = {
      name: '',
      subject: '',
      email: '',
      body: ''
    };
    form.$setPristine();
  };

}

module.exports = ContactCtrl;