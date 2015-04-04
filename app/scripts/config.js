'use strict';

/**
 * @ngdoc module
 * @name webtrack-constants
 * @description
 *
 * webtrack-constants
 *
 * The `webtrack-constants` module represents constantes for the whole
 * application
 */

angular.module('webtrack-constants', [])
  .constant('BACKEND_URL', 'https://webtrack.firebaseio.com/')
  .constant('DATA_USER_PATH', 'data_users')
  .constant('DATA_PROJECT_PATH', 'data_projects');
