'use strict';

/**
 * @ngdoc function
 * @name webtrackApp.controller:DetailviewCtrl
 * @description
 * # DetailviewCtrl
 * Controller of the webtrackApp
 */
angular.module('webtrackApp')
  .controller('DetailviewCtrl', ['$scope', '$location', '$firebaseArray', 'sharedProperties',
    function ($scope, $location, $firebaseArray, sharedProperties) {

      var url = "https://webtrack.firebaseio.com/data_projects";
      var ref = new Firebase(url);
      var projects = $firebaseArray(ref);

      $scope.projects = projects;
      projects.$loaded().then(function () {
        $scope.projects = projects;
      });


      $scope.itemsByPage = 10;


    }]);
