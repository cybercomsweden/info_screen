// js/services/todos.js
angular.module('kvpService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Kvp', function($http) {
        return {
            get : function() {
                return $http.get('/api/kvps');
            },
            create : function(kvpData) {
                return $http.post('/api/kvps', kvpData);
            },
            delete : function(id) {
                return $http.delete('/api/kvps/' + id);
            }
        }
    });