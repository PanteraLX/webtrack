'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('NavbarCtrl', ['$scope', '$cookieStore', '$rootScope','$route',
  function ($scope, $cookieStore, $rootScope, $route) {
    $scope.authenticated = $rootScope.userIsAuthenticated;
    console.log($scope.authenticated)
    $scope.userMail = $scope.mail = $cookieStore.get('mail');
    console.log($scope.userMail)
    $route.reload()
  }]);
