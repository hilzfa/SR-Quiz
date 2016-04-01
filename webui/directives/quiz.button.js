app.directive('quiz.button', [function () {
    return {
        restrict: 'E',
        templateUrl: '/quiz.button.html',
        replace: true,
        transclude: true
    }
}]);
