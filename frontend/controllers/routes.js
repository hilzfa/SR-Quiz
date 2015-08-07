/**
 * Created by D062653 on 06.08.2015.
 */

app.config(function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'tpls/home.html',
            controller: 'HomeCtrl'
        })

        // route for the about page
        .when('/profil', {
            templateUrl: 'tpls/profil.html',
            controller: 'ProfilCtrl'
        })

        // route for the contact page
        .when('/quiz', {
            templateUrl: 'tpls/quiz.html',
            controller: 'QuizCtrl'
        })
        .when('/impressum', {
            templateUrl: 'tpls/impressum.html',
            controller: 'ImpressumCtrl'
        });
});

// create the controller and inject Angular's $scope
app.controller('HomeCtrl', ['$scope',function($scope) {
    // create a message to display in our view
    $scope.message = 'HOME';
   
}]);

// create the controller and inject Angular's $scope
app.controller('ProfilCtrl', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.test = 50;
});

app.controller('QuizCtrl', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('ImpressumCtrl', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

