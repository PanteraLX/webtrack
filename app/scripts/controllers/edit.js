'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('EditCtrl', ['$scope', '$firebaseArray','sharedProperties','$location', '$cookieStore','md5',
    function ($scope, $firebaseArray, sharedProperties, $location, $cookieStore, md5) {

    $scope.token = $cookieStore.get('token');
    $scope.mail = $cookieStore.get('mail');

    $scope.projectToEdit = sharedProperties.getObject();
    $scope.projectKey = sharedProperties.getString();

    $scope.projectName = $scope.projectToEdit.projectName;
    $scope.projectLeader = $scope.projectToEdit.projectLeader;
    $scope.projectStart = $scope.projectToEdit.projectStart;
    $scope.projectEnd = $scope.projectToEdit.projectEnd;
    $scope.employees = $scope.projectToEdit.employees;


    var url = "https://webtrack.firebaseio.com/data_projects/" + md5.createHash($scope.mail);
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;

    $scope.editProject = function() {
      projects.$save({
        projectId :  Math.floor(Math.random() * 100),
        projectName: $scope.projectName,
        projectLeader: $scope.projectLeader,
        projectStart: $scope.projectStart.toJSON(),
        projectEnd: $scope.projectEnd.toJSON(),
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

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

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
