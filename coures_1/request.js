var http = require("http");
var fs = require("fs");
var request = require("request");

http.createServer(function (req, res) {
    var content ='';
    
    request("http://www.csie.isu.edu.tw/upload/80203/index.html", function (err, response, body) {
        content += body;
        res.end(content);
    });

}).listen(3000);