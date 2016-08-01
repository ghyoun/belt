(function(){
	'use strict'
	angular
		.module('beltApp')
		.factory('questionFactory', factory);

	function factory($http){
		var factory = {}


		factory.addQuestion = function(questionInfo, callback) {
			$http.post('/addQuestion', questionInfo)
				.then(function(returnData){
					callback(returnData)
				})
		}

		factory.getQuiz = function(callback) {
			$http.get('/getQuiz')
				.then(function(returnData){
					callback(returnData)
				})
		}

		return factory;
	}
})()
