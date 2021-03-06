'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:SigninCtrl
 * @description
 * # TestCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('SigninCtrl', ['$scope', '$firebaseAuth', '$location', '$cookieStore', '$rootScope',
    function ($scope, $firebaseAuth, $location, $cookieStore, $rootScope) {

      var ref = new Firebase('https://webtrack.firebaseio.com/');
      var auth = $firebaseAuth(ref);

      $scope.login = function () {
        auth.$authWithPassword({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function (user) {
          $cookieStore.put("token", user.token);
          $cookieStore.put("mail", user.password.email);
          $rootScope.userIsAuthenticated = true;
          $location.path('/overview');
        }).catch(function (error) {
          $scope.message = $scope.errorMessage(error.code);
        });
      };

      $scope.register = function () {
        auth.$createUser({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function () {
          $location.path('/signin');
        })
      };

      $scope.errorMessage = function (code) {
        switch (code) {
          case 'INVALID_PASSWORD':
            return "Falsches Passwort";
            break;
          case 'INVALID_USER':
            return "Dieser Benutzer wurde noch nicht registriert";
            break;
          case 'INVALID_EMAIL':
            return "Diese E-Mail-Adresse ist nicht gültig";
            break;
        }
      }

    }]);
