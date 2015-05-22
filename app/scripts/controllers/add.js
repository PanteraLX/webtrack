'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('AddCtrl', ['$scope', '$firebaseArray', '$location', '$cookieStore', 'md5',
    function ($scope, $firebaseArray, $location, $cookieStore, md5) {

    $scope.token = $cookieStore.get('token');
    $scope.mail = $cookieStore.get('mail');

    var url = "https://webtrack.firebaseio.com/data_projects/" +  md5.createHash($scope.mail);
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;

    $scope.addProject = function() {
      projects.$add({
        projectName: $scope.projectName,
        projectLeader: $scope.projectLeader,
        projectStart: Date.parse($scope.projectStart),
        projectEnd: Date.parse($scope.projectEnd),
        employees: $scope.employees,
        created: Firebase.ServerValue.TIMESTAMP
      }).then( function () {
        $location.path('/overview');
      })
    };

    $scope.open = function($event,opened) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope[opened] = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'dd.MM.yy';

  }]);
