myApp.directive('batScorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/experto/battingScoreCard.html',
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
        templateUrl: 'html/experto/bowlingScoreCard.html',
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
        templateUrl: 'html/experto/headerBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('footerdiv', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/experto/footer.html',
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
        templateUrl: 'html/experto/battingControls.html',
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
        templateUrl: 'html/experto/bowlingControls.html',
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
        templateUrl: 'html/experto/progressBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;
            
            console.log(attrs);



        }
    };


});