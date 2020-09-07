"use strict"; 

const Event = require('@common/Events').Event


module.exports.mountAppComponents = function( app ){
    require('@common/features').addFeatureSystem(app); 
    require('@server/parseArgs').parseArgs(app); 
    require('@server/stats').processStats( app );

    app.output = {
        c : msg => console.log(msg)
    }

    app.report = msg => app.output.c(msg); 

    app.recurringEvents = [new Event({
        freq: 1, 
        exec: (timeTick) => app.output.c(`Alive for ${timeTick} minutes`)
    })]; 

    require('@common/clock').mountClockSystem( app ); 
   
    return app.processStats.refresh(); 
}