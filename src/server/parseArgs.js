"use strict"

const optionDefinitions = [
    { name: 'server', type:Boolean, multiple:false, alias: 's'},
    { name: 'outputPath', type: String, multiple: false, alias:'o'},
    { name: 'src', type: String, multiple: true, defaultOption: true }
  ]
const commandLineArgs = require('command-line-args');


const parseArgs = function(app){
    const options = commandLineArgs(optionDefinitions)
    options.server = options.server || false;
    app.options = options
    return app
}

module.exports = {
    parseArgs
}

