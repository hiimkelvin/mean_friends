let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports = {
    getAll: (req,res) => {
        User.find({}, (err, users) => {
            if(err){
                console.log(err)
                return res.sendStatus(500);
            } else {
                return res.json(users);
            }
        })
    },

    addUser: (req, res) => {
        var newUser = new User(req.body);
        newUser.save((err, users) => {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            } else {
                return res.json(users);
            }
        })
    },

    getUser: (req, res) => {
        User.findOne({_id: req.params.id}, (err, current_user) => {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            } else {
                // console.log(current_user);
                return res.json(current_user);
            }
        })
    },

	editUser: (req, res) => {
		User.update({_id: req.body._id}, req.body, (err, data)=> {
			if(err){
				console.log(err);
				return res.sendStatus(500)
			}else{
                console.log(data);
				return res.json(data);
			}
		})	
	},

    deleteUser: (req, res) => {
        // console.log('hit controller')
        User.remove({_id: req.params.id}, (err, user) => {
            if(err){
                console.log(err)
                return res.sendStatus(500);
            } else {
                return res.json(user);
            }
        })
    }

};

