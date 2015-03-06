'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:SigninCtrl
 * @description
 * # TestCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('SigninCtrl', function ($scope, $firebaseSimpleLogin, $location) {
    var ref = new Firebase('https://webtrack.firebaseio.com/')
    var simpleLogin = $firebaseSimpleLogin(ref);

    $scope.login = function() {
      simpleLogin.$login('password', {
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(user){
        $location.path('/main');

      })


    }
  });
