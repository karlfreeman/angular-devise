//
angular.module('angularDevise.resources').factory('UserSession', function($resource) {
  return $resource('/users/sign_in.json', {});
});

//
angular.module('angularDevise.resources').factory('UserRegistration', function($resource) {
  return $resource('/users/sign_up.json', {});
});