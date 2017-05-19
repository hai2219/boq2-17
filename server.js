var express = require('express');
var app = express();

app.get("/", function(request, response) {
    console.log("Home page")
});
 
 app.listen(3000, function() {
    console.log("Listening on 3000");
});