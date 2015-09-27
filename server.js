var express = require('express'); //Node web server
var path = require('path'); 
var logger = require('morgan'); //Request response logger
var bodyParser = require('body-parser'); //For parsing POST request
var swig = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(request,response){
	Router.run(routes,request.path,function(Handler){
		var html = React.renderToString(React.createElement(Handler));
		var page = swig.renderFile('views/index.html',{html:html});
		response.send(page);
	});
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


