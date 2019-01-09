var app         = require("http").createServer(handler),
    fs      = require("fs"),
    redis   = require("redis");
 
app.listen(7070);
 
//You can specify port and host : redis.createClient(PORT, HOST, options)
var clientSusbcribe = redis.createClient();
 
clientSusbcribe.subscribe("the_channel");
 
clientSusbcribe.on("message", function(channel, message){
    console.log("client channel recieve from channel : %s, the message : %s", channel, message);
});
 
//On client incomming, we send back index.html
function handler(req, res){
    fs.readFile(__dirname + "/index.html", function(err, data){
        if(err){
            res.writeHead(500);
            return res.end("Error loading index.html");
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
}