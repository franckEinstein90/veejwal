"use strict"
/*****************************************************************************/
const express	   = require('express')
const cookieParser = require('cookie-parser')
const favicon      = require('express-favicon')
const path         = require('path')
/*****************************************************************************/

const installExpress = function( app ){
    app.express = express();
    require('@server/viewSystem').viewSystem({
        app     : app.express,  
        root    : app.root,
        layoutsDir:  path.join(app.metadata.root,'views','layouts/'),
        partialsDir: path.join(app.metadata.root,'views','partials/')
    }) 
    app.express.use(cookieParser());
    app.express.use(express.json())
    app.express.use(express.urlencoded({
        extended: false
    }))
    app.express.use(express.static( app.metadata.staticFolder ))

}

module.exports = {
   installExpress 
}
