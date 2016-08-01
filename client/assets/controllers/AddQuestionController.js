(function(){
	'use strict'
    angular
        .module('beltApp')
        .controller('AddQuestionController', addquestionCtrl)

    function addquestionCtrl(questionFactory, $location, $scope) {
		$scope.question = '';
		$scope.correct_answer = '';
		$scope.fake_answer_1 = '';
		$scope.fake_answer_2 = '';
		$scope.error = '';

		$scope.addQuestion = function() {
			if ($scope.question.length < 15) {
				$scope.error = 'Question must be at least 15 characters';
			} else if ($scope.correct_answer == '' ) {
				$scope.error = 'Answers should not be empty';
			} else if ($scope.fake_answer_1 == '' ) {
				$scope.error = 'Answers should not be empty';
			} else if ($scope.fake_answer_2 == '' ) {
				$scope.error = 'Answers should not be empty';
			} else {
				var newQuestion = {
					question : $scope.question,
					correct_answer : $scope.correct_answer,
					fake_answer_1 : $scope.fake_answer_1,
					fake_answer_2 : $scope.fake_answer_2
				}
				questionFactory.addQuestion(newQuestion, function(factoryData) {
					if(factoryData.data.status) {
						alert('Successfully added');
					}
					$location.url('/');
				})
			}

		}
    }

})()
