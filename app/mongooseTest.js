var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var dbM = mongoose.connection;
var Schema = mongoose.Schema;
dbM.on('error', console.error.bind(console, 'connection error'));
dbM.once('open', function (callback){
});

var urlSchema = new Schema({
    url: String,
    base_url: String
})

exports.Url = mongoose.model('Url', urlSchema);
exports.dbM = dbM;






// var url1 = new Url({ url: 'http://www.bbc.com' });

// url1.save(function(err, url1) {
//   if (err) {
//     console.log('error');
//   } else {
//     console.log('success!');
//   }
// });

// Url.find({url: 'http://www.bbc.com'}, function(err, model) {
//   if (err) {
//     console.log('error finding url');
//   } else {
//     console.log('success finding url');
//     console.log('model:', model);
//   }
// });


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name"
//   console.log(greeting);
// }

// var Kitten = mongoose.model('Kitten', kittySchema)

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens)
// })

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });
