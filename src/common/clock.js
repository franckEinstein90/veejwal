"use strict"; 
const CronJob = require('cron').CronJob;
const clockSystem = (function(){

    return {
        schedule: recurringEvent => recurringEvent 
    }
})()

const mountClockSystem = function( app ){
    let timeTick = 0; 
    const job = new CronJob('* * * * *', function() {
        timeTick++;
        app.recurringEvents.forEach(event=>{
            event.exec(timeTick)
        })
    }, null, true, 'America/Los_Angeles');
    job.start();

    app.clocks = {
        schedule: recurringEvent => clockSystem.schedule(recurringEvent)
    }
    return app; 
}

module.exports = {
    mountClockSystem
}