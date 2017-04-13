//(function (app) {

//    var blogs = [];
//        //[
//        //    {
//        //        BlogId: 1,
//        //        BlogTitle: "Test Blog 1",
//        //        BlogBody: "This is a test Blog 1",
//        //        BlogDate: "4/6/2017",
//        //        BlogCategory: "Category1"
//        //    },
//        //    {
//        //        BlogId: 2,
//        //        BlogTitle: "Test Blog 2",
//        //        BlogBody: "This is a test Blog 2",
//        //        BlogDate: "3/6/2017",
//        //        BlogCategory: "Category2"
//        //    },
//        //    {
//        //        BlogId: 3,
//        //        BlogTitle: "Test Blog 3",
//        //        BlogBody: "This is a test Blog 3",
//        //        BlogDate: "3/6/2017",
//        //        BlogCategory: "Category3"
//        //    },
//        //];


//    var blogService = function () {
//        var blogFactory = {};

//        blogFactory.getBlog = function (index) {
//            var returnBlogs = [];
//            if (blogFactory.isOverflow(index)) {
//                index = 0;
//            }
//            returnBlogs.push(blogs[index]);
//            return returnBlogs;
//        };

//        blogFactory.getBlogs = function (category) {
//            var returnBlogs = [];
//            //returnBlogs.push(blogs.filter(BlogCategory, category));
//            return returnBlogs;
//        };

//        blogFactory.isOverflow = function (index) {

//            return (blogs.length <= index)
//        };

//        blogFactory.addBlog = function (user) {
//            debugger;
//            var returnBlogs = [];
//            var newIndex = blogs.length + 1;
//            blogs.push(user);
//            returnBlogs.push(blog[blogs.length - 1]);
//            return (returnBlogs)
//        };

//        blogFactory.newItem = function (index) {            
//            var newItem = {

//                BlogId: index,
//                BlogTitle: "",
//                BlogBody: "",
//                BlogDate: new Date(),
//                BlogCategory: ""
//            }
//            return newItem;

//        }

//        return blogFactory;
//    };
//    app.factory("blogService", blogService);

//});