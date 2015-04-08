
angular.module('newspostController', []) // Dåligt att ha samma namn? Vad ska man ha?

    .controller('newspostController', function($scope, $http, Newspost) {
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
        // // delete a todo after checking it
        // $scope.deleteTodo = function(id) {
        //     Todos.delete(id)
        //         // if successful creation, call our get function to get all the new todos
        //         .success(function(data) {
        //             $scope.todos = data; // assign our new list of todos
        //         });
        // };
    });