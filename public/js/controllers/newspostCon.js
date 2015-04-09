angular.module('newspostController', []) //module to load into angular-application

    .controller('newspostController', function($scope, $http, Newspost) { //controller loaded by angular in html
         $scope.newsData = {};

         // on page load()
        Newspost.get()
            .success(function(data) {
                $scope.newsposts = data;
            });

        $scope.createNewspost = function() {
                Newspost.create($scope.newsData)
                    .success(function(data) {
                        $scope.newsData = {};
                        $scope.newsposts = data;
                    });
        };

        // // DELETE ==================================================================
        $scope.removeNewspost = function(id) {
            Newspost.delete(id)
                .success(function(data) {
                    console.log('success');
                    console.log(data);
                    $scope.newsposts = data;
                });
        };
    });