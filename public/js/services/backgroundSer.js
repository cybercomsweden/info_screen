angular.module('backgroundService', [])

    .factory('Background', function($http) {
        return {
            get : function() {
                return $http.get('/api/backgrounds');
            },
            create : function(newsData) {
                return $http.post('/api/backgrounds', newsData);
            },
            delete : function(id) {
                return $http.delete('/api/backgrounds/' + id);
            }
        }
    });