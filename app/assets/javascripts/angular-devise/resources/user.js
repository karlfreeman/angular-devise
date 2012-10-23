//
angular.module('angularDevise.resources').factory('UserSession', function($http) {

  var UserSession = function(options) {
    angular.extend(this, options);
  };

  UserSession.prototype.$save = function() {
    data = { "user" : { "email" : this.email, "password" : this.password, "remember_me" : this.remember_me ? 1 : 0 }, "utf8" : "✓", "commit" : "Sign in"} ;
    return $http.post('/users/sign_in', data);
  };

  UserSession.prototype.$destroy = function() {
    return $http.delete('/users/sign_out');
  };

  return UserSession;

});


// //
// angular.module('angularDevise.resources').factory('UserRegistration', function($resource) {
//   return $resource('/users/sign_up.json', {});
// });