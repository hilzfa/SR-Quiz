/**
 * Created by D062653 on 25.06.2015.
 */
var app = angular.module('refQuiz', ['ngRoute']);
app.controller('GetCtrl', ['$scope', '$http','$location', function ($scope, $http,$location) {
$scope.message = "Home";

    $scope.changeLocationProfil = function(){
                $location.path('/profil');
    };
    $scope.changeLocationHome = function(){
        $location.path('/');
    };
    $scope.changeLocationImpressum = function(){
        $location.path('/impressum');
    };
    $scope.changeLocationQuiz = function(){
        $location.path('/quiz');
    };

    $http.get('/getUser').success(function (res) {
       // $scope.user = {
          //  "name":res[0].name,
           // "vorname":res[0].vorname
       // };
		console.log(res);
    });

    $http.get('/getQuestion').success(function (res) {
        console.log("Meine Fragen:");
        console.log(res);
    });


}]);

