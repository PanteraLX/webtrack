'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('OverviewCtrl', ['$scope', '$location', function ($scope, $location) {

    var ref = new Firebase("https://webtrack.firebaseio.com/data_project");

    //$scope.data = $firebaseObject(ref);
    //console.log($scope.data);
    var
      projectList = ['Webtrack', 'IPA', 'EgoProjekt', 'Säich', 'Bier'],
      leaderList = ['Heinzmann Samuel', 'Richter Stefanie', 'Daniel Völlmin', 'Lars Anliker', 'Stiicher'];

    function createRandomItem(id) {
      var
        projectName = projectList[Math.floor(Math.random() * 5)],
        projectLeader = leaderList[Math.floor(Math.random() * 5)],
        projectLength = Math.floor(Math.random() * 100),
        employees = Math.floor(Math.random() * 10);

      return {
        projectId: id,
        projectName: projectName,
        projectLeader: projectLeader,
        projectLength: projectLength,
        employees: employees
      };
    }

    $scope.projects = [];
    for (var id = 1; id <= 20; id++) {
      $scope.projects.push(createRandomItem(id));
    };

    $scope.displayedCollection = [].concat($scope.projects);

    $scope.removeSingleProject = function removeSingleProject(row) {
      var box = window.confirm("Wollen sie das Pojekt wirklich löschen?")
      if (box) {
        var index = $scope.projects.indexOf(row);
        if (index !== -1) {
          $scope.projects.splice(index, 1);
        }
      }
    };

    $scope.removeMultiProject = function removeMultiProject() {
      var box = window.confirm("Wollen sie diese Pojekte wirklich löschen?")
      if (box) {
        for (id = 1; id <= $scope.projects.length; id++ ) {
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


    $scope.editProject = function editProject(row) {
      console.log('Bravo, dü chaisch super klicku')
      console.log(row);
    };

    $scope.go = function go(path) {
      $location.path(path)
    };


    $scope.newProject = function newProject(row) {
      console.log('Bravo, dü chaisch super klicku')
    };

    $scope.itemsByPage=10;


  }]);
