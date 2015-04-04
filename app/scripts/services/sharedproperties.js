'use strict';

/**
 * @ngdoc service
 * @name webtrackApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the webtrackApp.
 */
angular.module('webtrackApp')
  .service('sharedProperties', function () {
    var stringValue = '';
    var objectValue = {
      data : 'test'
    };

    return {
      getString: function() {
        return stringValue;
      },
      setString: function(value) {
        stringValue = value;
      },
      getObject: function() {
        return objectValue;
      },
      setObject: function(value) {
        objectValue = value;
      }
    };

  });
