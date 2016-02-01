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
    });
})
