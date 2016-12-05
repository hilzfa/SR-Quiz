var app = angular.module('quiz',['ngRoute', 'ngMaterial']);

$('#exampleModal').on('shown.bs.modal', function () {

})
var popoverTemplate = [
    '<div class="menuPopover popover">',
    '<div class="arrow"></div>',
    '<div class="popover-content"></div>',
    '</div>'
    ].join('');

var content = [
    '<div class="menu-header row">Kennung: 32sr0883</div>',
    '<div id="goSettings" onclick="settings()" class="menu-content row">Einstellungen</div>',
    '<div class="menu-content row">Mein Profil</div>',
    '<div class="menu-footer row" onclick="logout()"> Logout </div>',
    ].join('');


$(function () {
  $('[data-toggle="popover"]').popover({
    trigger : 'click',
    content : content,
    template : popoverTemplate,
    placement : "bottom",
    html : true
  });
});


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
