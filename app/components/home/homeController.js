var homeController = function ($scope, cacheService) {
        var init = function () {
            //$scope.filterCategories = [{ categoryName: "English", blogCount: 10 },];
            $scope.successMsg = '';
            $scope.blogs = angular.isUndefined(cacheService.get("blogs")) ? [] : cacheService.get("blogs");
            $scope.categories = angular.isUndefined(cacheService.get("categories")) ? [] : cacheService.get("categories");
        };
        
        var index = 0;
        
        init();
        
    $scope.addCategory = function (category) {
        debugger;
        this.categoryObject = category;
        this.categoryObject.categoryId = $scope.categories.length + 1;
        $scope.categories.push(this.categoryObject);        
        cacheService.put("categories", $scope.categories);
        $scope.successMsg = 'You successfully added a category.';
        this.category = null;
        //$scope.$setPristine(true);
        //$http.post('path/to/server/file/to/save/json', $scope.categories).then(function (data) {
        //    $scope.msg = 'Data saved';
        //});
    }    
    //app.directive('bindOnce', function () {
    //    return {
    //        scope: true,
    //        link: function ($scope, $element) {
    //            setTimeout(function () {
    //                $scope.$destroy();
    //            }, 0);
    //        }
    //    }
    //}); 
    };