//
angular.module('angularDevise.resources').factory('UserSession', ['$http', function($http) {

  var UserSession = function(options) {
    angular.extend(this, options);
  };

  UserSession.prototype.$save = function() {
    return $http.post('/users/sign_in', {
      "user" : {
        "email" : this.email,
        "password" : this.password,
        "remember_me" : this.remember_me ? 1 : 0
      }
    });
  };

  UserSession.prototype.$destroy = function() {
    return $http.delete('/users/sign_out');
  };

  return UserSession;

}]);

//
angular.module('angularDevise.resources').factory('UserRegistration', ['$http', function($http) {

  var UserRegistration = function(options) {
    angular.extend(this, options);
  };

  UserRegistration.prototype.$save = function() {
    return $http.post('/users', {
      "user" : {
        "email" : this.email,
        "password" : this.password,
        "password_confirmation" : this.password_confirmation
      }
    });
  };

  return UserRegistration;

}]);