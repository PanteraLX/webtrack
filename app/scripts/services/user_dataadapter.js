'use strict';

/**
 * @ngdoc service
 * @name webtrackApp.userDataadapter
 * @description
 * # userDataadapter
 * Service in the webtrackApp.
 */
angular.module('webtrackApp')
  .factory('userDataadapter', function myService(angularFire) {
    var url = "https://webtrack.firebaseio.com/data_project"
    var ref = new Firebase(url);
    var syncObject = $firebaseObject(ref);

    $scope.rowCollection = [];
    //syncObject.$bindTo($scope, "rowCollection");

    //console.log($scope.rowCollection)
  });
