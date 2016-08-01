var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express(),
    session = require('express-session');
    
app.use(bp.json())
app.use( express.static( path.join( root, 'client' )));

app.use(session({
    secret: 'dojo',
}))

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
