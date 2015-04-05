'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:SigninCtrl
 * @description
 * # TestCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('SigninCtrl', function ($scope, $firebaseAuth, $location) {
    var ref = new Firebase('https://webtrack.firebaseio.com/')
    var auth = $firebaseAuth(ref);

    $scope.login = function() {
      auth.$authWithPassword( {
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function(user) {
        $location.path('/overview');
      }).catch(function(error){
        $scope.message = error.message;
      });


    };
  });
