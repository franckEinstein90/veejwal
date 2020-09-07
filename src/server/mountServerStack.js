"use strict"

module.exports.mountServerStack = function( app ){
    require('@server/express').installExpress( app ); 
    require('@server/routers').mountRouters( app ); 
    require('@server/httpServer').httpServer( app );
    return app;  
}