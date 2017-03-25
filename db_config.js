var db_string = 'mongodb://127.0.0.1/jtf_restful';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Data base error conect'))

db.once ('open', function(){
	
	var userSchema = mongoose.Schema({
		
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);

	var photoSchema = mongoose.Schema({
		
		obstacle: String,
		created_at: Date
	});

	exports.Photo = mongoose.model('Photo', photoSchema);

});