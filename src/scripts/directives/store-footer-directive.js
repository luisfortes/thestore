/**
 * Created by lfortes on 11/14/2014.
 */

(function () {
    'use strict';

    angular.module('storeApp').directive('stFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/store-footer.html'
        };
    });

})();