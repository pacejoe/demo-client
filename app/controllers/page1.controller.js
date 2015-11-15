'use strict';

angular.module('app')
    .controller('Page1Ctrl', function ($scope) {

        $scope.page = 'Page 1';

        $scope.message = 'Welcome to the first of our application';

        $scope.editable = false;

        $scope.enableEditing = function(){
            $scope.editable = true;
        };

    });
