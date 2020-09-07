"use strict"; 



const users = [
    {
        al:1, 
        name:"franck"
    },
    {
        al:2, 
        name:"franck"
    }
]

const plotRouter = function( app ) {

    let _router = require('express').Router()
    _router.get('/', (req,res)=>{
        res.setHeader('Cache-Control','no-cache'); 
        res.json(users); 
    }) 
    return _router 

}

module.exports = {
    plotRouter
}