"use strict";

const appRootModule = function( app ) {

    let _router = require('express').Router()
    _router.get('/', (req,res)=>{
        let pageData = {
            title: `${app.metadata.name}`, 
            pageTitle: `${app.metadata.name}`
        }
        res.setHeader('Cache-Control','no-cache'); 
        res.render('user', pageData)
    }) 
    return _router 
}

module.exports = {
    appRootModule
}