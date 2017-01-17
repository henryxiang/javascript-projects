var app = require('express')();
var session = require('express-session');
var CASAuthentication = require('cas-authentication');
 
// Set up an Express session, which is required for CASAuthentication. 
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));
 
// Create a new instance of CASAuthentication. 
var cas = new CASAuthentication({
    cas_url     : 'http://zeus.local:8080/cas',
    service_url : 'http://192.168.0.111:8000'
});
 
// Unauthenticated clients will be redirected to the CAS login and then back to 
// this route once authenticated. 
app.get( '/app', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});
 
// Unauthenticated clients will receive a 401 Unauthorized response instead of 
// the JSON data. 
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});
 
// An example of accessing the CAS user session variable. This could be used to 
// retrieve your own local user records based on authenticated CAS username. 
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json( { cas_user: req.session[ cas.session_name ] } );
});
 
// Unauthenticated clients will be redirected to the CAS login and then to the 
// provided "redirectTo" query parameter once authenticated. 
app.get( '/authenticate', cas.bounce_redirect );
 
// This route will de-authenticate the client with the Express server and then 
// redirect the client to the CAS logout page. 
app.get( '/logout', cas.logout );

app.listen(8000, '0.0.0.0', function () {
  console.log('Example app listening on port 8000!')
});