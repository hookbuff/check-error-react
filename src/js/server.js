import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
//import favicon from 'serve-favicon';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App.jsx';

import router from './router.jsx';
 
var app = express();
//app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.use(express.static(path.join(__dirname, '../../public/')));
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../templates'));
 
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});
 
app.get('*', function(req, res){
    res.render("index.handlebars", {
        markup: ReactDOMServer.renderToString(React.createElement(App))
    });
});

app.use(router);