'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('EditCtrl', ['$scope', 'sharedProperties', function ($scope, sharedProperties) {
    $scope.projectToEdit = sharedProperties.getObject();
  }]);
