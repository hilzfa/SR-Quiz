app.controller('homeCtrl',['$scope','$location','$mdDialog',function DemoCtrl($scope,$loacation,$mdDialog){
  $scope.quiz = false;

 //  $scope.data = {
 //   cb1: true,
 //   cb4: true,
 //   cb5: false
 // };
 //
 // $scope.message = 'false';
 //
 // $scope.onChange = function(cbState) {
 //   $scope.message = cbState;
 // };
  // $scope.openMenu = function($mdMenu, ev) {
  //     originatorEv = ev;
  //     console.log("test");
  //     $mdMenu.open(ev);
  //   };

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    $scope.isOpen = false;

    $scope.redial = function(ev) {
      $mdDialog.show({
      controller: DialogController,
      templateUrl: 'settingsDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    };

    $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Möchtest du dich wirklich ausloggen?')
          .targetEvent(ev)
          .ok('Ja, ausloggen!')
          .cancel('Nein, doch nicht!');

    $mdDialog.show(confirm).then(function() {
      $.post('/logout').done(function(){
          window.location = window.location.search;
      });
    }, function() {
      return;
    });
  };

  $scope.user = JSON.parse(localStorage.getItem("user")).username;
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

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
}]);
