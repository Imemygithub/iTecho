var blogController = function ($scope, $routeParams, $location, cacheService) {
        var init = function () {           
            $scope.blogs = angular.isUndefined(cacheService.get("blogs")) ? [] : cacheService.get("blogs");
            $scope.categories = angular.isUndefined(cacheService.get("categories")) ? [] : cacheService.get("categories");
            $scope.eBlog = null;
    };

        $scope.filteredBlogs = []
            , $scope.currentPage = 1
            , $scope.numPerPage = 2
            , $scope.maxSize = 2;

        $scope.makeBlogs = function () {
            debugger;
            $scope.blogs = angular.isUndefined(cacheService.get("blogs")) ? [] : cacheService.get("blogs");
        };

        $scope.makeBlogs();

        $scope.fillData = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredBlogs = $scope.blogs.slice(begin, end);
        };
        $scope.$watch('currentPage + numPerPage', function () {
            debugger;
            $scope.fillData();
        },true);

        $scope.goEdit = function (blog) {
            return;
            //var index = $scope.blogs.indexOf(blog);
            //$scope.eBlog = $scope.blogs.splice(index, 1); 
            //$location.path("/editBlogView/" +blog.blogId);
        };
        var index = 0;
        var blogId = 0;
        var categoryId = 0;
        
        init();
        $scope.addBlog = function (blog) {
            debugger;  
            this.blogObject = blog;
            this.blogObject.blogId = $scope.blogs.length + 1;
            this.blogObject.blogPostDate = new Date();
            $scope.blogs.push(this.blogObject);
            cacheService.put("blogs", $scope.blogs);
            this.blog = null;
            $scope.fillData();
           // $scope.$setPristine(true);
            //$http.post('path/to/server/file/to/save/json', $scope.blogs).then(function (data) {
            //    $scope.msg = 'Data saved';
            //});
            
        }
        $scope.deleteBlog = function (blog) {
            var index = $scope.blogs.indexOf(blog);
            $scope.blogs.splice(index, 1); 
            cacheService.put("blogs", $scope.blogs);
            this.blog = null;
            $scope.fillData();
        }

        $scope.editBlog = function (eBlog) {
            var index = $scope.blogs.indexOf(eBlog);
            var editVal = $scope.blogs.splice(index, 1);
            $scope.blogs.push(this.blogObject);
            cacheService.put("blogs", $scope.blogs);
            this.blog = null;
            $scope.fillData();
        }
       
    };
    