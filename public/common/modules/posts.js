adminApp.factory('Posts', function($http){

	return {
		all: function(){
			return $http.get('/api/posts').then(function(postList){
				return postList.data;
			});
		},
		add: function(newPost){
			return $http({
				method: 'post',
				url: '/api/posts',
				data: newPost
			}).then(function(res){
				// return the new post
				return res.data;
				console.log("Blog Saved");
			}).catch(function(err){
				console.error('Something went wrong adding the post!');
				console.error(err);
				return err;
			});
		},
		remove: function(id){
			$http.delete('/api/posts/'+ id);
			
		},
		update: function(){

		}
	};
});