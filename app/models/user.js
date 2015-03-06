var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var userSchema = new Schema ({
  username: {type: String, required: true, index: {unique: true} },
  password: {type: String, required: true}
});


User = mongoose.model('User', userSchema);

User.comparePassword = function(attemptedPassword, savedPassword, callback) {
    bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
      if (err) {
        console.log('comparePassword error:', err);
        return callback(err);
      }
      callback(null, isMatch);
    });
}

userSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});


module.exports = User;
