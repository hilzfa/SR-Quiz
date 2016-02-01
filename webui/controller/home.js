app.controller('homeCtrl',function($scope){
  $scope.quiz = false;

  $scope.currentLocation = function(loc){
    switch (loc) {
      case 'quiz':
          $scope.quiz = true;
          $scope.home = false;
        break;
      case 'home':
          $scope.quiz = false;
      default:
        $scope.quiz = false;

    }
  }
})
