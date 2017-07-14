// Module dependencies
const express = require('express'), 
    http = require('http'), 
    path = require('path');

// Create an express app
const app = express();

// Configure an express app
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

app.configure('development', () =>{
    app.use(express.errorHandler());
});

// Store "session" information.  To see how to store sessions in a cookie, check out
// https://gist.github.com/visionmedia/1491756
const sessionInfo = {
    name:'Guest'
};

// Create session middleware
const session = (request, response, next) => {
    // TODO: How do we store session data on the request?  How do we continue with the request chain?
};

// Handle GET request to root URL
app.get('/', session, (request, response) => {
    // TODO: How do we render the "index.ejs" template from the /views directory?
});

app.post('/login', (request, response) => {
    // Update our session state with the undername submitted by the form
    sessionInfo.name = request.body.username;

    // TODO: How do we send the user back to "/" after the request?
    response.CHANGEME('/');
});

http.createServer(app).listen(app.get('port'), () => {
  console.log("Express server listening on port " + app.get('port') + " - visit http://localhost:3000/");
});
