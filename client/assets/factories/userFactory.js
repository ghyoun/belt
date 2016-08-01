(function(){
	'use strict'
	angular
		.module('beltApp')
		.factory('userFactory', factory)

	function factory($http){
		var factory = {}

		factory.getSession = function(callback){
			$http.get('/session')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.logout = function(callback){
			$http.get('/logout')
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.checkUser = function(currentUser, callback) {
			$http.post('/checkUser', currentUser)
				.then(function(returnData){
					callback(returnData)
				})
		}
		return factory
	}
})()
