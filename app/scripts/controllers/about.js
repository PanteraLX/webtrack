'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
