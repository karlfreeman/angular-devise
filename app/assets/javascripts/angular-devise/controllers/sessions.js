//
angular.module('angularDevise.controllers').controller('SessionsController', ['$scope', '$location', 'UserSession', function($scope, $location, UserSession) {
  $scope.user = new UserSession();
  $scope.create = function() {
    $scope.user.$save();
  };
  $scope.destroy = function() {};
}]);