console.log('users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2}
}, {timestamps: true});

mongoose.model('User', UserSchema);

var QuestionSchema = new mongoose.Schema({
    question: {type: String, required: true, minlength: 15},
    correct_answer: {type: String, required: true},
    fake_answer_1: {type: String, required: true},
    fake_answer_2: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);

var ResultSchema = new mongoose.Schema({
    name: {type: String, required: true},
    correct: {type: Number, required: true},
    percentage: {type:Number}
}, {timestamps: true});

mongoose.model('Result', ResultSchema);
