/**
 * Created by D062653 on 05.12.2016.
 */
app.controller('SettingsDialogController', ["$scope", "$mdDialog", "UtilService", function($scope, $mdDialog, UtilService){

    $scope.username = UtilService.getUser().username;

    setTimeout(function(){
        $(".userImage").css("background", 'url(' + '"' + UtilService.getImg()+ '"' +') no-repeat center');
        $(".userImage").css("background-size", 'cover');


    },1);


    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}]);