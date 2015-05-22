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

    $scope.projectKey = sharedProperties.getString();

    var url = "https://webtrack.firebaseio.com/data_projects/" + md5.createHash($scope.mail);
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    projects.$loaded()
      .then(function() {
        $scope.project = projects[$scope.projectKey];
      });

    $scope.editProject = function() {

      if (angular.isDate($scope.project.projectEnd)) {
        $scope.project.projectEnd = Date.parse($scope.project.projectEnd);
      }
      if (angular.isDate($scope.project.projectStart)) {
        $scope.project.projectStart = Date.parse($scope.project.projectStart);
      }
      projects.$save($scope.projectKey)
        .then( function () {
        $location.path('/overview');
      })
    };

    $scope.removeSingleProject = function removeSingleProject() {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?");
      if (box) {
        $scope.projects.$remove($scope.projectKey);
      }
      $location.path('/overview');
    };

    $scope.open = function($event,opened) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope[opened] = true;
    };

    $scope.format = 'dd.MM.yy';

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.checkJSON = function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return str.toJSON();
      }
      return str;
    }
  }]);
