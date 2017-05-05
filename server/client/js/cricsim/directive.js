myApp.directive('batScorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/battingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('bowlscorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/bowlingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('headerbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/headerBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});


myApp.directive('battingcontrol', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/battingControls.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('bowlingcontrol', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/bowlingControls.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('progressbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/cricsim/progressBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;
            
            console.log(attrs);



        }
    };


});