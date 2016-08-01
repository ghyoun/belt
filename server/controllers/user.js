console.log('users controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
    this.checkUser = function(req, res) {
        console.log(req.body.name);
        User.findOne({name: req.body.name}, function(err, dbUser) {
            if (err) {
                res.json({status: false, errors: err});
            } else if (!dbUser) {
                var newUser = new User(req.body);
                newUser.save(function(err) {
                    req.session['currentUser'] = {
                        id: newUser.id,
                        name: newUser.name
                    }
                    res.json({status: true, newUser: true});
                })
            } else {
                req.session['currentUser'] = {
                    id: dbUser.id,
                    name: dbUser.name
                }
                res.json({status: true, newUser: false});
            }
        })
    }

    this.logout = function(req, res) {
        req.session.destroy();
    }

    this.session = function(req,res){
		if(req.session['currentUser']) {
            res.json({status:true, userInfo: req.session['currentUser']})
		} else {
			res.json({status:false, userinfo:null})
		}
	}
}
module.exports = new UsersController();
