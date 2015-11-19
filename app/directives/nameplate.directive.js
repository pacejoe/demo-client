'use strict';

angular.module('app')
    .directive('nameplate', [
        function () {
            return {
                restrict: 'E',
                templateUrl: '/app/directives/nameplate.html',
                scope: {
                    'user': '='
                }
            };
        }]
    );

