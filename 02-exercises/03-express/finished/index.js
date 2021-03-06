const express = require('express'), 
    http = require('http'), 
    path = require('path');

const app = express();

app.configure(() => {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', () => {
    app.use(express.errorHandler());
});

// Store "session" information.  To see how to store sessions in a cookie, check out
// https://gist.github.com/visionmedia/1491756
const sessionInfo = {
    name:'Guest'
};

// Create session middleware
const session = (request, response, next) => {
    request.sessionInfo = sessionInfo;
    next();
};

app.get('/', session, (request, response) => {
    response.render('index',request.sessionInfo);
});

app.post('/login', (request, response) => {
    sessionInfo.name = request.body.username;
    response.redirect('/');
});

http.createServer(app).listen(app.get('port'), () => {
  console.log("Express server listening on port " + app.get('port'));
});
