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
    'firebase',
    'ui.bootstrap',
    'angular-md5',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        requireLogin: false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        requireLogin: false
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        requireLogin: false
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        requireLogin: false
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
        requireLogin: true
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        requireLogin: true
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl',
        requireLogin: true
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'SigninCtrl',
        requireLogin: false
      })
      .when('/detailview', {
        templateUrl: 'views/detailview.html',
        controller: 'DetailviewCtrl',
        requireLogin: true
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        requireLogin: true
      })
      .when('/navbar', {
        templateUrl: 'partials/navbar.html',
        controller: 'NavbarCtrl',
        requireLogin: true
      })
      .otherwise({
        redirectTo: '/',
        requireLogin: false
      });
  });
