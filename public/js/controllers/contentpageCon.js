angular.module('contentpageController', []) //module to load into angular-application

    .controller('contentpageController', function($scope, $http, Contentpage) { //controller loaded by angular in html
         $scope.contentpageData = {};


         $scope.fetchAllPages = function(){
            Contentpage.get()
            .success(function(data) {
                $scope.contentpages = data;
            });
        }

        $scope.fetchAllPagesInCategories = function(){
            Contentpage.get()
            .success(function(data) {
                pages = {};
                for(i in data){
                        if(pages[data[i].category]){
                            console.log("Cat exists, add here!");
                            pages[data[i].category].push(data[i]);
                        } else {
                            console.log("No cat, create!");
                            var category = data[i].category;
                            pages[category] = [];
                            pages[category].push(data[i]);

                        }
                    }
                console.log(pages);

                $scope.contentpages = pages;
                        
            });
        }

        $scope.createContentpage = function() {
                Contentpage.create($scope.contentpageData)
                    .success(function(data) {
                        $scope.contentpageData = {};

                        $scope.contentpages = data;
                    });
        };

        // // DELETE ==================================================================
        $scope.removeContentpage = function(id) {
            Contentpage.delete(id)
                .success(function(data) {
                    console.log('success');
                    console.log(data);
                    $scope.contentpages = data;
                });
        };
    });