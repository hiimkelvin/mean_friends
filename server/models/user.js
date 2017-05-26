let mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, require: true},
    birthday: {type: String, require: true},
}, {timestamps: true});

mongoose.model('User', UserSchema);

