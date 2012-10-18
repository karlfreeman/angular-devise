/* Directives */
/*
  cribbed from http://jsfiddle.net/p3ZMR/10/
*/
angular.module('angularDevise.directives').
  directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        scope.location = location;
        var link = element.find('a');
        scope.$watch('location.path()', function(newPath) {
          console.log(link.attr('href'), newPath);
            if (link.attr('href') === newPath) {
                element.addClass('active');
            } else {
                element.removeClass('active');
            }
        });
      }
    };
  }]);