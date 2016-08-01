(function() {
    'use strict'

    angular
        .module('beltApp', ['ngRoute'])
        .config(config)

    function config($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl: '../partials/dash.html',
            controller: 'DashController'
        })

        .when('/new_question', {
            templateUrl: '../partials/addQuestion.html',
            controller: 'AddQuestionController'
        })

        .when('/lets_play', {
            templateUrl: '../partials/play.html',
            controller: 'PlayController'
        })

    }
})()
