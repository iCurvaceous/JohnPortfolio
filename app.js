var express = require("express");
var app = express();
var path = require('path');
var router = express.Router();

//route for splash index page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//route for home page
router.get('/home', function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
});

//route for resume page
router.get('/resume', function(req,res){
    res.sendFile(path.join(__dirname+'/resume.html'));
});

//route for projects page
router.get('/projects', function(req,res){
    res.sendFile(path.join(__dirname+'/projects.html'));
});

//route for contact page
router.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
});

//sets up server
app.use('/', router);
app.listen(process.env.port || 0812);
console.log("Running on port 0812.");