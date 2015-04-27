'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('OverviewCtrl', ['$scope', '$location', '$firebaseArray', 'sharedProperties', function ($scope, $location, $firebaseArray, sharedProperties) {

    var url = "https://webtrack.firebaseio.com/data_projects"
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;
    projects.$loaded().then(function() {
      $scope.projects = projects;
    })

    $scope.removeSingleProject = function removeSingleProject(key) {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?")
      if (box) {
        projects.$remove(key);
      }
    };

    $scope.removeMultiProject = function removeMultiProject() {
      var box = window.confirm("Wollen sie diese Pojekte wirklich löschen?")
      if (box) {
        for (var id = 1; id <= $scope.projects.length; id++ ) {
          if($scope.projects[id-1].isSelected) {
            var index = $scope.projects.indexOf(id);
            if (index !== -1) {
              $scope.projects.splice(id, 1);
            }
            console.log(id);
          }
        }
      }
    };

    $scope.editProject = function editProject(key) {
      sharedProperties.setObject($scope.projects[key]);
      $location.path('/edit');
    };

    $scope.newProject = function newProject(row) {
      console.log('Bravo, dü chaisch super klicku')
    };

    $scope.itemsByPage=10;


  }]);