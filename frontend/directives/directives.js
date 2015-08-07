/**
 * Created by D062653 on 04.08.2015.
 */

app.directive('quiz.button', [function () {
    return {
        restrict: 'E',
        templateUrl: '/directives/quizButton.html',
        replace: true,
        transclude: true
    }
}]);

app.directive('nav.button', [function () {
    return {
        restrict: 'E',
        templateUrl: '/directives/navButton.html',
        replace: true,
        transclude: true
    }
}]);
