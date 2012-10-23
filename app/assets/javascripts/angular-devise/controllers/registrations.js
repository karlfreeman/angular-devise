//
angular.module('angularDevise.controllers').controller('RegistrationsController', ['$scope', '$location', 'UserRegistration', function($scope, $location, UserRegistration) {

  $scope.registration = new UserRegistration( { email:"foo-" + Math.floor((Math.random()*10000)+1) + "@bar.com", password:"example", password_confirmation:"example" } );

  $scope.create = function() {
    $scope.registration.$save();
  };

  $scope.destroy = function() {
    $scope.registration.$destroy();
  };

}]);