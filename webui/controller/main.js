var app = angular.module('quiz',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/' ,{
      templateUrl : '../tpls/home.html',
      controller  : 'homeCtrl'
    })
    .when('/quiz',{
      templateUrl : '../tpls/quiz.html',
      controller  : 'quizCtrl'
    })
    .when('/dahsboard',{
      templateUrl : '../tpls/dashboard.html',
      controller  : 'dashboardCtrl'
    })
    .when('/profile',{
      templateUrl : '../tpls/profile.html',
      controller  : 'profileCtrl'
    })
    .when('/impressum',{
      templateUrl : '../tpls/impressum.html'
    });
})
