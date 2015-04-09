angular.module('backgroundController', [])

    .controller('backgroundController', function($scope, $http, Background) {
         $scope.newsData = {};

         // on page load()
        Background.get()
            .success(function(data) {
                $scope.backgrounds = data;
            });

            // CREATE ========================================
        $scope.createBackground = function() {
                Background.create($scope.backgroundData)
                    .success(function(data) {
                        $scope.backgroundData = {};
                        $scope.backgrounds = data;
                    });
        };

        // // DELETE ==================================================================
        $scope.removeBackground = function(id) {
            Background.delete(id)

                .success(function(data) {
                    console.log('success');
                    console.log(data);
                    $scope.backgrounds = data;
                });
        };
    });