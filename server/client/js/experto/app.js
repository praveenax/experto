var myApp = angular.module('cricsim', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/experto/landing.html',
            controller: 'landingCntrl'
        })
    .when('/login', {
            templateUrl: 'html/experto/login.html',
            controller: 'loginCntrl'
        })
//        .when('/', {
//            templateUrl: 'html/experto/home.html',
//            controller: 'homeContrl'
//        })
        .when('/match', {
            templateUrl: 'html/experto/match.html',
            controller: 'matchContrl'
        })
    
     .when('/dashboard', {
            templateUrl: 'html/experto/dashboard.html',
            controller: 'dashCntrl'
        });

    //wbd
});