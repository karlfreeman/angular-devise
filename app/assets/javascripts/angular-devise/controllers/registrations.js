//
angular.module('angularDevise.controllers').controller('RegistrationsController', ['$scope', '$location', 'Session', function($scope, $location, Session) {

  $scope.registration = Session.userRegistration;

  $scope.create = function() {
    $scope.registration.$save();
  };

  $scope.destroy = function() {
    $scope.registration.$destroy();
  };

}]);