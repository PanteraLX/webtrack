'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('OverviewCtrl', function ($scope, $filter) {
    var
      projectList = ['Webtrack', 'IPA', 'EgoProjekt', 'Säich', 'Bier'],
      leaderList = ['Heinzmann Samuel', 'Richter Stefanie', 'Daniel Völlmin', 'Lars Anliker', 'Stiicher'];

    function createRandomItem(id) {
      var
        projectName = projectList[Math.floor(Math.random() * 5)],
        projectLeader = leaderList[Math.floor(Math.random() * 5)],
        projectLength = Math.floor(Math.random() * 100),
        employees = Math.floor(Math.random() * 10);

      return{
        projectId: id,
        projectName: projectName,
        projectLeader: projectLeader,
        projectLength: projectLength,
        employees: employees
      };
    }

    $scope.removeRow = function removeRow(row) {
      var box = window.confirm("Wollen sie das Pojekt wirklich löschen?")
      if (box) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
        }
      }
    }

    $scope.editRow = function editRow(row) {
      console.log('Bravo, dü chaisch super klicku')
    }

    $scope.newProject = function newProject(row) {
      console.log('Bravo, dü chaisch super klicku')
    }

    $scope.itemsByPage=20;

    $scope.rowCollection = [];
    for (var j = 1; j <= 20; j++) {
      $scope.rowCollection.push(createRandomItem(j));
    }

  });
