'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
