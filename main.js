var request = require('request');
var http = require('http');
var r = request.defaults({
	'proxy':'https://proxy.campus.com:443'
});

var oauth = {
	consumer_key:'',
	consumer_secret:'',
	token:'',
	token_secret:''
};
var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	r.get({url:url, oauth:oauth}, function(e,r,body){
		res.end(body);
	});
});

server.listen('3000');