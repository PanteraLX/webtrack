'use strict';

/**
 * @ngdoc overview
 * @name webtrackApp
 * @description
 * # webtrackApp
 *
 * Main module of the application.
 */
angular
  .module('webtrackApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/add', {
        templateUrl: 'views/hinzufügen.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
