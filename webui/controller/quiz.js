app.controller('quizCtrl',['$scope','$location',function($scope,$location){
  $scope.message = "TestQuiz";
    $scope.answer = false;
  $scope.test = function(){
    $scope.answer = true;
  }
}])
