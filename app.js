//New instance of express
//La var express es usada como función, ya que estas son un objeto de primera
//clase en Javascript, y por tanto las variables pueden utilizarse como variables
var express = require('express');

// Helmet es un módulo de seguridad, para aplicar entre otras los X-Frame
var helmet = require('helmet');
var app = express();

// Definimos por defecto el nivel de políticas, pero permitimos customizar 
// las de xframe. Para prevenir que otro site pueda embebir nuestro código.
helmet.defaults(app, { xframe: false });
//app.use(helmet.xframe('allow-from', 'https://maps.google.es'));
//app.use(helmet.xframe('sameorigin'));

/*Declaración de directorio padre para la descarga de ficheros estáticos*/
app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'jade');
app.set('view options', {layout: true });
app.set('views',__dirname + '/views');

/*app.get('/endocrinologia/:name?', function(req, res, next){
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

app.get('/endocrinologia/?', function(req,res){
	res.render('endocrinologia', {opcion: null});
});*/

app.get('/nutricion/?', function(req,res){
	res.render('nutricion');
});

app.get('/endocrinologia/?', function(req,res){
	res.render('endocrinologia');
});

app.get('/clinica/?', function(req,res){
	res.render('clinica');
});

app.get('/?',function(req,res){
	res.render('index');
});

var port = process.env.PORT || 5000; /*En Heroku no se puede asignar un puerto fijo*/
app.listen(port);
console.log('listening on port ' + port);