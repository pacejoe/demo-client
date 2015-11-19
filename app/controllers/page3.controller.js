'use strict';

angular.module('app')
    .controller('Page3Ctrl', function ($scope, UserSvc) {

        $scope.users = [];
        $scope.user = {};

        $scope.addUser= function(u) {
            UserSvc.addUser(u).then(
                function(users) {
                    $scope.users = users;
                })
        };


        $scope.loadData= function() {
            UserSvc.getAll().then(
                function(users) {
                    $scope.users = users;
                })
        };

    });
