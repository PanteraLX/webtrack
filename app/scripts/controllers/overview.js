'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('OverviewCtrl', ['$scope', '$location', '$firebaseArray', 'sharedProperties', '$cookieStore', 'md5', 'ngTableParams', '$filter',
    function ($scope, $location, $firebaseArray, sharedProperties, $cookieStore, md5, ngTableParams, $filter) {

      if (angular.isUndefined($cookieStore.get('token'))) {
        $location.path('/signin');
      } else {
        $scope.token = $cookieStore.get('token');
        $scope.mail = $cookieStore.get('mail');
      }

      var url = "https://webtrack.firebaseio.com/data_projects/" + md5.createHash($scope.mail);
      var ref = new Firebase(url);
      var projects = $firebaseArray(ref);

      $scope.projects = projects;
      projects.$loaded().then(function () {
        $scope.projects = projects;
      });

      $scope.removeSingleProject = function removeSingleProject(key) {
        var box = window.confirm("Wollen sie das Projekt wirklich löschen?");
        if (box) {
          projects.$remove(key);
        }
      };

      $scope.editProject = function editProject($key) {
        $cookieStore.put('projectKey', $key)
        sharedProperties.setString($key);
        $location.path('/edit');
      };

      $scope.showDetails = function showDetails($key) {
        $cookieStore.put('projectKey', $key)
        sharedProperties.setString($key);
        $location.path('/detailview');
      };

      $scope.tableParams = new ngTableParams({
        page: 1,
        count: 5,
        sorting: {projectName: 'desc'}
      });

    }]);
