'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('LogoutCtrl',['$scope', '$cookieStore','$rootScope', '$location',
    function ($scope, $cookieStore,$rootScope,$location) {

    $rootScope.userIsAuthenticated = false;
    $cookieStore.remove('token');
    $cookieStore.remove('mail');

    $location.path('/main');

  }]);
