



app.controller('MainCtrl', function ($scope, $mdSidenav, $mdUtil, $log) {

    $scope.toggleRight = buildToggler('right');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    }

  })
  .controller('SidenavCtrl', function ($scope, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

  app.factory('Posts',function($http){

  return {
    all: function(callback){
      return $http.get('/api/posts').then(function(postList){
        
        callback(postList.data);
      });
    }
  };
});

app.directive('mainview',['Posts',function(Posts){

return {
            restrict: 'E',
             templateUrl: '/home/templates/allPosts.html',
             link: function (scope, element, attrs) {
                  Posts.all(function(res){
                    scope.posts=res;
                  })             
           },
           controller:'bigView' 
          }
}]);

app.controller('bigView',function($scope){
 
// $scope.activePost = $scope.posts[0];

$scope.setActive= function(post){
  console.log($scope.post);
$scope.activePost=post;
};

});