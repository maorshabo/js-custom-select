(function () {
  angular.module('jsCustomSelect.directives')
    .directive('stopPropagation', function () {
      return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
          var events = attrs['stopPropagation'];
          elem.bind(events, function (event) {
            event.stopPropagation();
          });
        }
      };
    });
})();
