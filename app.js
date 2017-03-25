var app = require('./app_config.js');

var userController = require('./controller/userController.js');

var validator = require('validator');

var photoCollections = require('./collections/photoCollections.js');

app.get('/', function(req, res){
	
	res.end('Servidor ON!');
});

app.get('/users', function(req, res){
	
	userController.list(function(resp){
		
		res.json(resp);
	});
});

app.get('/users/:id', function(req, res){
	
	var id = req.param('id');

	userController.user(id, function(resp){
		
		res.json(resp);
	});
});

app.post('/users', function(req, res){

	var fullname = req.param('fullname');
	var email = req.param('email');
	var password = req.param('password');

	userController.save(fullname, email, password, function(resp){
		
		res.json(resp);
	});
});

app.put('/users', function(req, res){

	var id = req.param('id');
	var fullname = req.param('fullname');
	var email = req.param('email');
	var password = req.param('password');

	userController.update(id, fullname, email, password, function(resp){
		
		res.json(resp);
	});
});

app.delete('/users/:id', function(req, res){
	
	var id = req.param('id');

	userController.delete(id, function(resp){
		
		res.json(resp);
	});
});

app.get('/photos', function(req, res){
	
	photosCollections.list(function(resp){
		
		res.json(resp);
	});
});

app.get('/photos/:obstacle', function(req, res){
	
	var obstacle = validator.trim(validator.escape(req.param('obstacle')));

	photoCollections.photo(obstacle, function(resp){
		
		res.json(resp);
	});
});

app.post('/photos', function(req, res){

	var obstacle = req.param('obstacle');
	
	photoCollections.save(obstacle, function(resp){
		
		res.json(resp);
	});
});

app.put('/obstacle', function(req, res){

	var id = req.param('id');
	var obstacle = req.param('obstacle');
	
	photoCollections.update(id, obstacle, function(resp){
		
		res.json(resp);
	});
});

app.get('/obstacle/:obstacle', function(req, res){
	
	var obstacle = validator.trim(validator.escape(req.param('obstacle')));

	photoCollections.list_obstacle(obstacle, function(resp){
		
		res.json(resp);
	});
});

app.delete('/photos/:id', function(req, res){
	
	var id = req.param('id');

	photoCollections.delete(id, function(resp){
		
		res.json(resp);
	});
});