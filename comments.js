
// Create web server
var express = require('express');
var app = express();

// Add static files
app.use(express.static('public'));

// Add comments
var comments = "This is a comment";