angular.module('contentpageService', [])

    .factory('Contentpage', function($http) {
        return {
            get : function() {
                return $http.get('/api/contentpages');
            },
            create : function(newsData) {
                return $http.post('/api/contentpages', newsData);
            },
            delete : function(id) {
                return $http.delete('/api/contentpages/' + id);
            }
        }
    });