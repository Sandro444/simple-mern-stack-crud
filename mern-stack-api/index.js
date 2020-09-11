require("./db")
const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let postMessageRoutes = require("./controllers/postMessageController")

app.use(bodyParser.json())

app.listen(4000, ()=>console.log("server started at 4000"))

app.use("/postmessages", postMessageRoutes)