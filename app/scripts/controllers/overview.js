'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('OverviewCtrl', ['$scope', '$location', '$firebaseArray', 'sharedProperties', '$cookieStore',
    function ($scope, $location, $firebaseArray, sharedProperties, $cookieStore) {

    var url = "https://webtrack.firebaseio.com/data_projects"
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;
    projects.$loaded().then(function() {
      $scope.projects = projects;
    })

    $scope.token = $cookieStore.get('token')

    console.log($scope.token);

    $scope.removeSingleProject = function removeSingleProject(key) {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?")
      if (box) {
        projects.$remove(key);
      }
    };

    $scope.editProject = function editProject(key) {
      sharedProperties.setObject($scope.projects[key]);
      sharedProperties.setString(key);
      $location.path('/edit');
    };

    $scope.showDetails = function showDetails(key) {
      sharedProperties.setObject($scope.projects[key]);
      sharedProperties.setString(key);
      $location.path('/detailview');
    };


    $scope.itemsByPage=2;


  }]);
