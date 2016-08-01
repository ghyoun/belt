var mongoose = require('mongoose');
var Result = mongoose.model('Result');

function ResultsController(){
    this.add = function(req, res) {
        var newResult = new Result(req.body);
        newResult.save(function(err) {
            if(err) {
                res.json({status: false});
            } else {
                res.json({status: true, result: newResult});
            }
        })
    }

    this.get = function(req, res) {
        Result.find({}, function(err, dbResults) {
            if (err) {
                res.json({status: false});
            } else {
                res.json({status: true, result:dbResults});
            }

        })
    }
}
module.exports = new ResultsController();
