'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('LogoutCtrl',['$scope', '$cookieStore', function ($scope, $cookieStore) {

    $cookieStore.remove('token')

  }]);
