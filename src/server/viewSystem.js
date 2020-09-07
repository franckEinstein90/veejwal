"use strict"

/*****************************************************************************/
const hbs = require('express-handlebars');
/*****************************************************************************/

const viewSystem = function({
    app,
    layoutsDir,
    partialsDir
}) {
    app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'main',
        layoutsDir,
        partialsDir
    }));
    app.set('view engine', 'hbs');
}

module.exports = {
    viewSystem
};
