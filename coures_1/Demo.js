var http = require("http");
var fs = require("fs");
http.createServer(function (req, res){ //create Server

    var content ='';
    fs.readFile("./demo.html", function (err, file)
    {
        content += file;
        res.end(content); //end Response
    });
    
    /*
    另外一種執行方式，等待較久
    setTimeout(function () {
    res.end(content);
    },// 5000);
    */
}).listen(3000);