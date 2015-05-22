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

    $scope.token = $cookieStore.get('token');
    $scope.mail = $cookieStore.get('mail');

    var url = "https://webtrack.firebaseio.com/data_projects/" + md5.createHash($scope.mail);
    var ref = new Firebase(url);
    var projects = $firebaseArray(ref);

    $scope.projects = projects;
    projects.$loaded().then(function() {
      $scope.projects = projects;
    });

    $scope.removeSingleProject = function removeSingleProject(key) {
      var box = window.confirm("Wollen sie das Projekt wirklich löschen?");
      if (box) {
        projects.$remove(key);
      }
    };

    $scope.editProject = function editProject(key) {
      sharedProperties.setString(key);
      $location.path('/edit');
    };

    $scope.showDetails = function showDetails(key) {
      sharedProperties.setString(key);
      $location.path('/detailview');
    };

    $scope.tableParams = new ngTableParams({
      page: 1,
      count: 3
    }, {
      total: $scope.projects.length, // length of data
      getData: function($defer, params) {
        var orderedData = params.filter() ?
          $filter('filter')($scope.projects, params.filter()) :
          $scope.projects;

        //$scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

        //params.total(orderedData.length); // set total for recalc pagination
        //$defer.resolve($scope.users);
      }
    });

  }]);
