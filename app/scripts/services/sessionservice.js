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
    var userIsAuthenticated = false

    this.setUserauthenticated = function(value) {
      userIsAuthenticated = value;
    }

    this.getUserauthenticated = function() {
      return userIsAuthenticated
    }
  });
