(function(){
	'use strict'
    angular
        .module('beltApp')
        .controller('NavbarController', function(userFactory, $scope, $http, $location, $route) {
			$scope.userInfo;

            // $http.get("/session").then(function(res){
            //     $scope.userInfo = res.data;
			// 	console.log($scope.userInfo);
            // });
			//


            $scope.logout = function(){
				userFactory.logout(function(factoryData) {

				})
				$location.url('/');
				$route.reload();
			};
        });
})()
