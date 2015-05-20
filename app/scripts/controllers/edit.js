'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('EditCtrl', ['$scope', '$firebaseArray','sharedProperties','$location',
    function ($scope, $firebaseArray, sharedProperties, $location) {

    $scope.projectToEdit = sharedProperties.getObject();
    $scope.projectKey = sharedProperties.getString();

    $scope.projectName = $scope.projectToEdit.projectName;
    $scope.projectLeader = $scope.projectToEdit.projectLeader;
    $scope.projectLength = $scope.projectToEdit.projectLength;
    $scope.employees = $scope.projectToEdit.employees;


    var url = "https://webtrack.firebaseio.com/data_projects"
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;

    $scope.editProject = function() {
      projects.$add({
        projectId :  Math.floor(Math.random() * 100),
        projectName: $scope.projectName,
        projectLeader: $scope.projectLeader,
        projectLength: $scope.projectLength,
        employees: $scope.employees,
        date: Firebase.ServerValue.TIMESTAMP
      }).then( function () {
        $location.path('/overview');
      })
    }

    $scope.removeSingleProject = function removeSingleProject() {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?")
      if (box) {
        $scope.projects.$remove($scope.projectKey);
      }
      $location.path('/overview');
    };

  }]);
