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
    'ngTouch',
    'smart-table',
    'firebase'
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
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'SigninCtrl'
      })
      .when('/detailview', {
        templateUrl: 'views/detailview.html',
        controller: 'DetailviewCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
