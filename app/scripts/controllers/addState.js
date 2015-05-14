'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('AddCtrl', ['$scope', '$firebaseArray', '$location', function ($scope, $firebaseArray, $location) {

    var url = "https://webtrack.firebaseio.com/data_projects"
    var ref = new Firebase(url);
    var projectdetails = $firebaseArray(ref);

    $scope.projectdetails = projectdetails;

    $scope.addState = function() {
      projectdetails.$add({
        projectName: $scope.projectName,
        employees: $scope.employees,
        phase: $scope.phase,
        phaseLength: $scope.phaseLength,
        lastChange: $scope.lastChange,

        date: Firebase.ServerValue.TIMESTAMP
      }).then( function () {
        $location.path('/detailview');
      })
    }

  }]);
