var express = require("express");
const { auth } = require('express-openid-connect');
require('dotenv').config()

//Config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
};

var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(auth(config));

app.get('/', (req, res) => {
    res.render("index", { 
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user,
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!!");
});