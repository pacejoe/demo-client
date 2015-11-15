'use strict';

angular.module('app')
    .controller('Page2Ctrl', function ($scope) {

        $scope.developers = [
            {name: 'Mike', location: 'RI'},
            {name: 'Joe',  location: 'PA'},
            {name: 'Mark', location: 'RI'}
        ]

    });
