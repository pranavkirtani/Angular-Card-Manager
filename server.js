var express=require('express')
var app=express();
var fs=require('fs')
app.get('/data',function(req,res,next){
    var data=fs.readFileSync(__dirname+'/data/data.json','UTF-8')
    res.json(data);
})
app.use(express.static(__dirname))
app.use(function(req,res,next){
      res.sendFile(__dirname+'/index.html')
});
app.listen(3000);
console.log("started listening on 3000");