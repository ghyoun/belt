(function(){
	'use strict'
    angular
        .module('beltApp')
        .controller('DashController', dashCtrl)

    function dashCtrl(resultFactory, userFactory, $location, $scope) {

		$scope.currentUser;
		$scope.currentSession;
		$scope.results;

		$scope.load = function() {
			userFactory.getSession(function(factoryData) {
			$scope.currentSession = factoryData.data.status;
			console.log(factoryData);
			console.log($scope.currentSession)
			if ($scope.currentSession == false) {
				console.log($scope.currentSession)
				$scope.currentUser = prompt("Please enter your name");
				$scope.currentUserObject = {
					name: $scope.currentUser
				}
				userFactory.checkUser($scope.currentUserObject, function(factoryData) {
					console.log(factoryData);
				})
			}

			resultFactory.getResults(function(factoryData) {
				$scope.results = factoryData.data.result;
			})

			});
		}

		$scope.load();







    }

})()
