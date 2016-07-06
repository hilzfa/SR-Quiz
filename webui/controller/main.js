var app = angular.module('quiz',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/' ,{
      templateUrl : '/home.html',
      controller  : 'homeCtrl'
    })
    .when('/quiz',{
      templateUrl : '/quiz.html',
      controller  : 'quizCtrl'
    })
    .when('/dahsboard',{
      templateUrl : '/dashboard.html',
      controller  : 'dashboardCtrl'
    })
    .when('/profile',{
      templateUrl : '/profile.html',
      controller  : 'profileCtrl'
    })
    .when('/impressum',{
      templateUrl : '/impressum.html'
    })
    .when('/adminPanel',{
      templateUrl : '/admin.html',
      controller  : 'adminCtrl'
  });
});
