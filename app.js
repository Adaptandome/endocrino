var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('view options', {layout: true });
app.set('views',__dirname + '/views');

app.get('/nutricion/:name?', function(req, res, next){
	var name = req.params.name;

	switch (name ? name.toLowerCase() : ''){
		case 'preventiva' :
		case 'curativa' :
		case 'especial'   :
			res.render('nutricion', {opcion:name});

			break;

		default:

			next();

	}
});

app.get('/nutricion/*?', function(req,res){
	res.render('nutricion', {opcion: null});
});

app.get('/?',function(req,res){
	res.render('index');
});

var port = 8080;
app.listen(port);
console.log('listening onport ' + port);