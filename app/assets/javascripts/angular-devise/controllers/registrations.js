//
angular.module('angularDevise.controllers').controller('RegistrationsController', ['$scope', '$location', 'UserRegistration', function($scope, $location, UserRegistration) {
  $scope.user = new UserRegistration();
  $scope.create = function() {
    $scope.user.$save();
  };
  $scope.destroy = function() {};
}]);