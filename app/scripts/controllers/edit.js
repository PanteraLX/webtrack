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

    $scope.removeSingleProject = function removeSingleProject(key) {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?")
      if (box) {
        $scope.projects.$remove(key);
      }
    };
  }]);
