import React from 'react';
import ReactDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router'
 
import routes from './routes.jsx';
 
export default function(req, res) {
    match({ routes, location:req.url }, (error, redirectLocation, renderProps) => {
        res.render("index.handlebars", {
            markup: ReactDOM.renderToString(<RoutingContext {...renderProps} />)
        });
    });
}