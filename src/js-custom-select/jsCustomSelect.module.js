(function (angular, undefined) {
  'use strict';
  // TODO: Move to polyfill?
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('jsCustomSelect.config', [])
      .value('jsCustomSelect.config', {
          debug: true
      });

  // Modules
  angular.module('jsCustomSelect.directives', []);
  angular.module('jsCustomSelect.filters', []);
  angular.module('jsCustomSelect.services', []);
  angular.module('jsCustomSelect.values', []);
  angular.module('jsCustomSelect',
      [
          'jsCustomSelect.config',
          'jsCustomSelect.directives',
          'jsCustomSelect.filters',
          'jsCustomSelect.services',
          'jsCustomSelect.values',
          'ui.filters'
      ]);

})(angular);
