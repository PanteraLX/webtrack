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
    var projects = $firebaseArray(ref);

    $scope.projects = projects;

    $scope.addProject = function() {
      projects.$add({
        projectId : Math.floor(Math.random() * 100),
        projectName: $scope.projectName,
        projectLeader: $scope.projectLeader,
        projectStart: $scope.projectStart.toJSON(),
        projectEnd: $scope.projectEnd.toJSON(),
        employees: $scope.employees,
        created: Firebase.ServerValue.TIMESTAMP
      }).then( function () {
        $location.path('/overview');
      })
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.openStart = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.openEnd = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'dd.MM.yy';

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i=0;i<$scope.events.length;i++){
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };

  }]);
