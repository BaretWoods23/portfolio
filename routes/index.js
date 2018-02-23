var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("index");
});

router.get("/projects", function(req,res){
	res.render("projects");
});

router.get("/aboutme", function(req,res){
	res.render("aboutme");
});

router.get("/contactme", function(req,res){
	res.render("contactme");
})

router.get("/projects/:projectID", function(req,res){
	res.render("project");
});

module.exports = router