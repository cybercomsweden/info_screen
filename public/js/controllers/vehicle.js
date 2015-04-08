// js/controllers/main.js
angular.module('vehicleController', []) // Dåligt att ha samma namn? Vad ska man ha?

    // inject the Todo service factory into our controller
    .controller('vehicleController', function($scope, $http, Vehicle) {
         $scope.vehicleData = {};

        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Vehicle.get()
            .success(function(data) {
                $scope.vehicles = data;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createVehicle = function() {

                // call the create function from our service (returns a promise object)
                Vehicle.create($scope.vehicleData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.vehicleData = {}; // clear the form so our user is ready to enter another
                        $scope.vehicles = data; // assign our new list of todos
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