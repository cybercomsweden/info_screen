// js/controllers/main.js
angular.module('kvpController', []) // Dåligt att ha samma namn? Vad ska man ha?

    // inject the Todo service factory into our controller
    .controller('kvpController', function($scope, $http, Kvp) { // Kvps -
         $scope.kvpData = {};

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Kvp.get()
            .success(function(data) {
                $scope.kvps = data;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createKvp = function() {

                // call the create function from our service (returns a promise object)
                Kvp.create($scope.kvpData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.kvpData = {}; // clear the form so our user is ready to enter another
                        $scope.kvps = data; // assign our new list of todos
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