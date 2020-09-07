"use strict"


const appRouter = require('@server/routers/root').appRootModule; 
const plotRouter = require('@server/routers/plotRouter').plotRouter; 

const Router = function(route, router){
    this.route = route
    this.router = router
}

const mountRouters = function( app ){
    app.routers = [];
    app.routers.push(new Router('/', appRouter(app))); 
    app.routers.push(new Router('/plot', plotRouter(app)));
    return app
}

module.exports = {
    mountRouters
}
