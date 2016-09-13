

adminApp.controller('NavCtrl', function($scope, $state){
	$scope.active = $state;
	console.log($scope.active );
	$scope.isActive = function(viewLocation){
		var active = (viewLocation === $state.current.name);
		return active;
	};
});

adminApp.controller('AllPostsCtrl', function($scope, postList,Posts){
	$scope.posts = postList;
	$scope.activePost = false;
	$scope.setActive = function(post){
		$scope.activePost = post;
	}

$scope.removeMe=function(post){
	$scope._id=post._id;
	console.log($scope._id);
	Posts.remove($scope._id);

	$scope.posts.splice($scope._id,1);
	swal("Good Job","Blog Removed","success");
};




});

adminApp.controller('AddPostCtrl',['$scope','Posts', function($scope,Posts){
	console.log(Posts);
	$scope.post = {
		'title':'',
		'body':''
	};
	$scope.addPost = function(newPost){
		Posts.add(newPost).then(function(res){
			console.log(res);
			swal("Good Job","Blog Saved","success");
		});
	};


}]);
