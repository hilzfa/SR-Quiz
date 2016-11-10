app.controller('homeCtrl',['$scope','$location',function($scope,$loacation){
  $scope.quiz = false;

  $scope.user = JSON.parse(localStorage.getItem("user")).username.toUpperCase();
  $scope.admin = JSON.parse(localStorage.getItem("user")).adminFlag;

  $scope.editSettings = false;

  $scope.setImg = function(){
    var url = JSON.parse(localStorage.getItem("user")).imgUrl;
      if(url != undefined){
        $scope.userImg = url;
      }else{
        $scope.userImg = "/unknown-user.png";
      }
  };

  $scope.setImg();




  $scope.currentLocation = function(loc){
    switch (loc) {
      case 'quiz':
        $scope.quiz = true;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = false;
      break;
      case 'home':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = false;
      break;
      case 'impressum':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = true;
        $scope.profile = false;
        $scope.dashboard = false;
        $loacation.path('/impressum');
      break;
      case 'profile':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = true;
        $scope.dashboard = false;
      break;
      case 'dashboard':
        $scope.quiz = false;
        $scope.home = false;
        $scope.impressum = false;
        $scope.profile = false;
        $scope.dashboard = true;
      break;
      default:
        $scope.quiz = false;

    }
  }
}]);
