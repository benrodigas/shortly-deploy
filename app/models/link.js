var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var linkSchema = new Schema({
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number
});

Link = mongoose.model('Link', linkSchema);

var createSha = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

linkSchema.pre('save', function(next){
  var code = createSha(this.url);
  this.code = code;
  next();
});


module.exports = Link;
