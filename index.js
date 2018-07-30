var express = require("express");
var mongo = require('mongodb');
var bodyParser = require("body-parser");
var app = express();

var MongoClient = mongo.MongoClient;
var url = "mongodb://root:root123@ds121091.mlab.com:21091/deber";

app.get('/estudiante', function (req, res) {
    var jsonObj;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("deber");
            dbo.collection("estudiante").find({}).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj = result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });
    });
});


app.get('/estudiante/:cod', function (req, res) {
    var jsonObj;
    var code = req.params.cod;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("deber");
            dbo.collection("estudiante").findOne({ cedula: code }, function (err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj = result;
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
                db.close();
            });
    });
});

app.use(bodyParser.json());
app.put('/estudiante/', function (req, res) {
    var jsonObj = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("deber");
        dbo.collection("estudiante").insertOne(jsonObj, function (err, result) {
            if (err) throw err;
            res.send();
            db.close();
        });
    });

});


app.delete('/estudiante/:sec', function (req, res) {
    var jsonObj;
    var code = req.params.sec;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("deber");
            dbo.collection("estudiante").deleteOne({ secuencia: code }, function (err, result) {
                if (err) throw err;
                console.log(result);
                jsonObj = result;
                res.setHeader('Content-Type', 'application/json');
                res.send();
                db.close();
            });
    });
});

app.listen(4000);
console.log("Servidor online por el 4000");