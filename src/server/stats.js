/*******************************************************************************
 * FranckEinstein90
 * Used for demos, new features, experiments
 * -------------------------------------
 * add process stats support
 ******************************************************************************/
"use strict"

/*****************************************************************************/
const os = require('os')
/*****************************************************************************/
const pidUsage = require('pidusage')
/*****************************************************************************/

const stats = function( app ){
	app.processStats = {
        id:process.pid, 
        cpu:null, 
        memory:null, 
        elapsed:null, 
        ppid: null  
    }

	let getStats = () => {
		return new Promise((resolve, reject) => {
            let process = app.processStats
			pidUsage(   process.id, function(err, stats ){
                    if(err) {return reject(err)}
				    process.cpu     = stats.cpu
					process.memory 	= stats.memory / 1024 / 1024 //convert from B to MB
					process.elapsed	= stats.elapsed
					process.ppid    = stats.ppid
					return resolve( app )
			})
		})

	}
	app.processStats.refresh = getStats
}

const processStats = function( app ){
	stats ( app ); 
    return app; 
}

module.exports = {
    processStats
}
