app.directive('quiz.button', [function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/quiz.button.html',
        replace: true,
        transclude: true
    }
}]);
