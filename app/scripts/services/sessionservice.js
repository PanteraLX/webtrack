'use strict';

/**
 * @ngdoc service
 * @name webtrackApp.SessionService
 * @description
 * # SessionService
 * Service in the webtrackApp.
 */
angular.module('webtrackApp')
  .service('SessionService', function () {
    $rootScope.userIsAuthenticated = false

    this.setUserauthenticated = function(value) {
      $rootScope.userIsAuthenticated = value;
    }

    this.getUserauthenticated = function() {
      return $rootScope.userIsAuthenticated
    }
  });
