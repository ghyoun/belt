console.log('question controller');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionsController(){
    this.add = function(req, res) {
        var newQuestion = new Question(req.body);
        newQuestion.save(function(err) {
            if(err) {
                res.json({status: false});
            } else {
                res.json({status: true, question: newQuestion});
            }
        })
    }

    this.getQuiz = function(req, res) {
        Question.find({}, function(err, dbQuestions) {
            if (err) {
                res.json({status: false});
            } else {
                res.json({status: true, questions:dbQuestions});
            }

        })
    }
}
module.exports = new QuestionsController();
