console.log('routes');
user = require("./../controllers/user.js");
question = require("./../controllers/question.js");
result = require("./../controllers/result.js");
// What is this 'friends' object we are referencing below??
module.exports = function(app){
    app.get('/', function(req, res) {
        res.render("index");
    })

    app.get('/session', user.session);
    app.get('/logout', user.logout);
    app.post('/checkUser', user.checkUser);

    app.post('/addQuestion', question.add);
    app.get('/getQuiz', question.getQuiz);

    app.get('/getResults', result.get);
    app.post('/addResult', result.add);
}
