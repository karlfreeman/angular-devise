//
angular.module('angularDevise.controllers').controller('SessionsController', ['$scope', '$location', 'UserSession', function($scope, $location, UserSession) {
  $scope.session = new UserSession({ email:"foo@bar.com", password:"example", remember_me:true });
  $scope.create = function() {
    $scope.session.$save().success(function(data, status, headers, config) {
      $scope.session.$destroy();
    });
  };

  $scope.destroy = function() {
    $scope.session.$destroy();
  };

}]);