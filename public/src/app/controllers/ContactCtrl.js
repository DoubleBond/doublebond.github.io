ContactCtrl.$inject = ['$scope', '$http'];

function ContactCtrl($scope, $http) {

  $scope.mail = {};
  $scope.is_loading = false;
  $scope.msg_sent = false;

  $scope.send = function (form) {
    if (form.$valid){
      $scope.is_loading = true;
      $http.post('/api/contact', $scope.mail)
        .then(function (res) {
          if(res.data.status === 'error'){
            alert(res.data.message);
          } else {
            $scope.reset(form);
            $scope.msg_sent = true;
          }
          $scope.is_loading = false;
        }, function (res) {
          alert(res);
          $scope.is_loading = false;
        });
    }
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