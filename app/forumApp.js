(function () {
    var app = angular.module("forumApp", ['ui.bootstrap','angular.filter', 'ngRoute' ]);

    app.factory("cacheService", cacheService, function ($cacheFactory) { });

    app.controller('homeController', function ($scope, cacheService) {
        //debugger;
        $scope.categories = [{ categoryId:1, categoryName:"C#", categoryDescription:"Test" }];
        cacheService.put("categories", $scope.categories);
    });
    app.controller('blogController', function ($scope, $routeParams, $location, cacheService) {        
        //debugger;
        //$scope.blogs = angular.isUndefined(cacheService.get("blogs")) ? [] : cacheService.get("blogs");
    });
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/categoryView", {
                controller: homeController,
                templateUrl: "app/components/home/categoryView.html"
            })
            .when("/homeView", {
                controller: homeController,
                templateUrl: "app/components/home/homeView.html"
            })
            .when("/blogView", {
                controller: blogController,
                templateUrl: "app/components/blog/blogView.html"
            })
            .when("/editBlogView/:blogId", {
                controller: blogController,
                templateUrl: "app/components/blog/editBlogView.html"
            });
    });


    app.directive('bindOnce', function () {
        return {
            scope: true,
            link: function ($scope, $element) {
                setTimeout(function () {
                    $scope.$destroy();
                }, 0);
            }
        }
    });
}());