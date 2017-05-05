var myApp = angular.module('cricsim', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/cricsim/home.html',
            controller: 'homeContrl'
        })
        .when('/match', {
            templateUrl: 'html/cricsim/match.html',
            controller: 'matchContrl'
        });

    //wbd
});