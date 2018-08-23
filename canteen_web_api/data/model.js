const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/canteen_web');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connectted to database canteen_web!");
});

const Schema = mongoose.Schema;

const User = mongoose.model("User", new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: String,
    firstname: String,
    lastname: String,
    question: String,
    answer: String,
    login_time: Date,
    last_time_login: Date,
    signup_time: Date,
    admin: Boolean
}));


module.exports = {
    User
};