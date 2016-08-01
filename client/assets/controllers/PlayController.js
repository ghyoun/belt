(function(){
	'use strict'
    angular
        .module('beltApp')
        .controller('PlayController', playCtrl)

    function playCtrl(resultFactory, userFactory, questionFactory, $location, $scope) {
        $scope.currentUser;
        $scope.questions = [];
        $scope.answer1 = '';
        $scope.answer2 = '';
        $scope.answer3 = '';
        $scope.correct = 0;

        $scope.shuffle = function(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
            return array;
        }

        $scope.load = function() {
            userFactory.getSession(function(factoryData) {
                $scope.currentUser = factoryData.data.userInfo.name;
            })
            questionFactory.getQuiz(function(factoryData) {
                var factoryQuestions = factoryData.data.questions;
                var factoryQuestions = $scope.shuffle(factoryQuestions);
                $scope.questions = factoryQuestions.slice(0,3);
                console.log($scope.questions);
            })
        }


        $scope.load();

        $scope.submitAnswers = function() {
            if ($scope.answer1 == '' || $scope.answer2 == '' || $scope.answer3 == '') {
                $scope.error = 'Please fill out all questions'
            } else {
                if ($scope.answer1 == 'correct') {
                    $scope.correct++;
                }
                if ($scope.answer2 == 'correct') {
                    $scope.correct++;
                }
                if ($scope.answer3 == 'correct') {
                    $scope.correct++;
                }
                var resultInfo = {
                    name : $scope.currentUser,
                    correct : $scope.correct,
					percentage : (($scope.correct / 3) * 100)
                }
                resultFactory.addResult(resultInfo, function(factoryData) {
                    console.log(factoryData);
                })
                $location.url('/');
                alert("That was great " + $scope.currentUser + " Your score is " + $scope.correct + "/3");
            }
        }
    }
})()
