"use strict";
require('module-alias/register')

const path = require('path') 
const app = {  
    metadata : {
        name        :  'vizual', 
        root        :  __dirname, 
        staticFolder:  path.join(__dirname, 'public')
    }, 
}

require('@server/mountAppComponents').mountAppComponents( app )
.then (app => {

        app.report('Starting in server mode')         
        require('@server/mountServerStack').mountServerStack( app ); 

        app.report(`Setting up routes:`) ; 
        app.routers.forEach( path => {
            app.report(`\t${path.route}`); 
            app.express.use( path.route, path.router ); 
        })
        app.server.start(); 
        app.report(`cpu usage: ${app.processStats.cpu}`)
})

/*
11 const util = require('util');
 12 const graphviz = require('graphviz');
 13
 14 // Create digraph G
 15 var g = graphviz.digraph("G");
 16
 17 // Add node (ID: Hello)
 18 var n1 = g.addNode( "Hello", {"color" : "blue"} );
 19 n1.set( "style", "filled" );
 20
 21 // Add node (ID: World)
 22 g.addNode( "World" );
 23
 24 // Add edge between the two nodes
 25 var e = g.addEdge( n1, "World" );
 26 e.set( "color", "red" );
 27
 28 // Print the dot script
 29 console.log( g.to_dot() );
 30
 31 // Set GraphViz path (if not in your path)
 32 //g.setGraphVizPath( "/usr/local/bin" );
 33 // Generate a PNG output*/
                         
