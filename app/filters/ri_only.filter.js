'use strict';

angular.module('app')
    .filter('riOnly', function () {
        return function (items) {
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.location === 'RI') {
                    filtered.push(item);
                }
            }
            return filtered;
        };
    });