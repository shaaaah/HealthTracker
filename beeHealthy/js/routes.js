angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('beeHealthy', {
    url: '/page1',
    templateUrl: 'templates/beeHealthy.html',
    controller: 'beeHealthyCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('overview', {
    url: '/page4',
    templateUrl: 'templates/overview.html',
    controller: 'overviewCtrl'
  })

  .state('calorieTracker', {
    url: '/page5',
    templateUrl: 'templates/calorieTracker.html',
    controller: 'calorieTrackerCtrl'
  })

  .state('heartRateTracker', {
    url: '/page6',
    templateUrl: 'templates/heartRateTracker.html',
    controller: 'heartRateTrackerCtrl'
  })

  .state('fitnessTracker', {
    url: '/page7',
    templateUrl: 'templates/fitnessTracker.html',
    controller: 'fitnessTrackerCtrl'
  })

  .state('myTasks', {
    url: '/page8',
    templateUrl: 'templates/myTasks.html',
    controller: 'myTasksCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});