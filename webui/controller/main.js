var app = angular.module('quiz',['ngRoute', 'ngMaterial']);


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
        .when('/gControl',{
            templateUrl : '/gControl.html',
            controller  : 'gControlCtrl'
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
