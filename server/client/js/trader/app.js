var myApp = angular.module('trader-app', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/trader/home.html',
            controller: 'homeContrl'
        })
        .when('/match', {
            templateUrl: 'html/trader/match.html',
            controller: 'matchContrl'
        });

    //wbd
});