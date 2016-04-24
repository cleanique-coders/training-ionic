angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('simpleCheckIn', {
    url: '/home',
    templateUrl: 'templates/simpleCheckIn.html',
    controller: 'simpleCheckInCtrl'
  })

  .state('addNewCheckIn', {
    url: '/new-check-in',
    templateUrl: 'templates/addNewCheckIn.html',
    controller: 'addNewCheckInCtrl'
  })

  .state('checkInDetails', {
    url: '/check-in-details/:id',
    templateUrl: 'templates/checkInDetails.html',
    controller: 'checkInDetailsCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});