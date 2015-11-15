'use strict';

angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/page1', {
                templateUrl: 'app/views/page1.html',
                controller: 'Page1Ctrl'
            })
            .when('/page2', {
                templateUrl: 'app/views/page2.html',
                controller: 'Page2Ctrl'
            })
            .when('/page3', {
                templateUrl: 'app/views/page3.html',
                controller: 'Page3Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });