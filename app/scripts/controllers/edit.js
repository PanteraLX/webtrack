'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('EditCtrl', ['$scope', '$firebaseArray', 'sharedProperties', '$location', '$cookieStore', 'md5',
    function ($scope, $firebaseArray, sharedProperties, $location, $cookieStore, md5) {

      if (angular.isUndefined($cookieStore.get('token'))) {
        $location.path('/signin');
      } else {
        $scope.token = $cookieStore.get('token');
        $scope.mail = $cookieStore.get('mail');
      }
      $scope.projectKey = $cookieStore.get('projectKey');
      $scope.PlEditable = true;
      $scope.EmplEditable = true;
      $scope.NameEditable = true;

      var url = "https://webtrack.firebaseio.com/data_projects/" + md5.createHash($scope.mail);
      var ref = new Firebase(url);
      var projects = $firebaseArray(ref);

      projects.$loaded()
        .then(function () {
          $scope.project = projects[$scope.projectKey];
        });

      $scope.editProject = function () {

        if (angular.isDate($scope.project.projectEnd)) {
          $scope.project.projectEnd = Date.parse($scope.project.projectEnd);
        }
        if (angular.isDate($scope.project.projectStart)) {
          $scope.project.projectStart = Date.parse($scope.project.projectStart);
        }
        $scope.project.updated = Firebase.ServerValue.TIMESTAMP;
        projects.$save($scope.projectKey)
          .then(function () {
            $location.path('/overview');
          })
      };

      $scope.removeSingleProject = function removeSingleProject() {
        var box = window.confirm("Wollen sie das Projekt wirklich löschen?");
        if (box) {
          $scope.projects.$remove($scope.projectKey);
          $location.path('/overview');
        }
      };

      $scope.open = function ($event, opened) {
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

      $scope.togglePlReadonly = function () {
        if ($scope.PlEditable) {
          $scope.PlEditable = false;
        } else {
          $scope.PlEditable = true;
        }
      }

      $scope.toggleNameReadonly = function () {
        if ($scope.NameEditable) {
          $scope.NameEditable = false;
        } else {
          $scope.NameEditable = true;
        }
      }

      $scope.toggleEmpReadonly = function () {
        if ($scope.EmplEditable) {
          $scope.EmplEditable = false;
        } else {
          $scope.EmplEditable = true;
        }
      }
    }]);
