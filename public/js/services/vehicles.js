angular.module('vehicleService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Vehicle', function($http) {
        return {
            get : function() {
                return $http.get('/api/vehicles');
            },
            create : function(vehicleData) {
                return $http.post('/api/vehicles', vehicleData);
            },
            delete : function(id) {
                return $http.delete('/api/vehicles/' + id);
            }
        }
    });