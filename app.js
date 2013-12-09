var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('view options', {layout: true });
app.set('views',__dirname + '/views');

app.get('/endocrinologia/:name?', function(req, res, next){
	var name = req.params.name;

	switch (name ? name.toLowerCase() : ''){
		case 'general' :
		case 'preventiva' :
		case 'especial'   :
			res.render('endocrinologia', {opcion:name});

			break;

		default:

			next();

	}
});

app.get('/endocrinologia/*?', function(req,res){
	res.render('endocrinologia', {opcion: null});
});

app.get('/nutricion/?', function(req,res){
	res.render('nutricion');
});

app.get('/?',function(req,res){
	res.render('index');
});

var port = process.env.PORT || 5000; /*En Heroku no se puede asignar un puerto fijo*/
app.listen(port);
console.log('listening on port ' + port);