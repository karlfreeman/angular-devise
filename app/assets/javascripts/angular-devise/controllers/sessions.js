//
angular.module('angularDevise.controllers').controller('SessionsController', ['$scope', '$location', 'UserSession', function($scope, $location, UserSession) {
  
  $scope.session = new UserSession( { email:"foo@bar.com", password:"example", remember_me:true } );

  $scope.create = function() {
    $scope.session.$save();
  };

  $scope.destroy = function() {
    $scope.session.$destroy();
  };

}]);