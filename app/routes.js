'use strict';

angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html'
            })
            .when('/page1', {
                templateUrl: 'app/views/page1.html'
            })
            .when('/page2', {
                templateUrl: 'app/views/page2.html'
            })
            .when('/page3', {
                templateUrl: 'app/views/page3.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });