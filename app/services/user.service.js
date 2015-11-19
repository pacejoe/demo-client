'use strict';

angular.module('app')
    .service('UserSvc', function ($http) {

        var url = "http://localhost:9000/service/user";

        this.getAll = function () {
            var request = $http({
                method: "get",
                url: url
            });
            return (request.then(handleSuccess, handleError));
        };


        this.addUser = function (user) {
            var request = $http({
                method: "post",
                url: url,
                data: user
            });
            return (request.then(handleError, handleError));
        };


        function handleError() {
            return ("An error occurred.");
        }


        function handleSuccess(response) {
            return (response.data);
        }


    });