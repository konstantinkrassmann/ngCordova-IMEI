/*!
 * ngCordova-imei
 * Copyright 2014 Konstantin Krassmann
 * @since 30.12.2014
 * See LICENSE in this repository for license information
 */
angular.module('ngCordova.plugins.imei', [])

    .factory('$cordovaIMEI', ['$q', '$window', function ($q, $window) {

        return {
            get: function () {
                var q = $q.defer();

                $window.plugins.imei.get(q.resolve, q.reject);

                return q.promise;
            }
        };
    }]);