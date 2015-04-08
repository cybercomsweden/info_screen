// js/services/todos.js
angular.module('newspostService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Newspost', function($http) {
        return {
            get : function() {
                return $http.get('/api/newsposts');
            },
            create : function(newsData) {
                return $http.post('/api/newsposts', newsData);
            },
            delete : function(id) {
                return $http.delete('/api/newsposts/' + id);
            }
        }
    });