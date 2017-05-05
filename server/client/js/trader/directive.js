myApp.directive('headerbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/trader/headerBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});

myApp.directive('tile', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/trader/tile.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});