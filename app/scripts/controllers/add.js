'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('AddCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

    var url = "https://webtrack.firebaseio.com/data_projects"
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;

    $scope.addProject = function() {
      projects.$add({
        projectId : Math.floor(Math.random() * 100),
        projectName: $scope.projectName,
        projectLeader: $scope.projectLeader,
        projectLength: $scope.projectLength,
        employees: $scope.employees,
        date: Firebase.ServerValue.TIMESTAMP
      }).then( function () {
        $scope.projectName = '';
      })
    }

  }]);
