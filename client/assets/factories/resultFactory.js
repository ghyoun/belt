(function(){
	'use strict'
	angular
		.module('beltApp')
		.factory('resultFactory', factory);

	function factory($http){
		var factory = {}


		factory.getResults = function(callback){
			$http.get('/getResults')
				.then(function(returnData){
					callback(returnData)
				})
		}

        factory.addResult = function(resultInfo, callback){
			$http.post('/addResult', resultInfo)
				.then(function(returnData){
					callback(returnData)
				})
		}

		return factory;
	}
})()
