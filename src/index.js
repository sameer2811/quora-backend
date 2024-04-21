const { serverConfig } = require('./config');
const {userRouter} = require('./routes');

// Importing the required express
const express = require('express');

// Initialization of the server
const server = express();

// Basic Log just to check the config 
console.log("Printing the server config ", serverConfig.PORT);



// Setup of API Routes
server.get("/", function (req, res) {
    console.log("Server has recieved your request at / url");
    return res.json({
        "sucess": true,
        "msg": "server listening at / route"
    })
});

server.use("/users" , userRouter);

// Listen Method for the server
server.listen(serverConfig.PORT, function () {
    console.log("Server started Listeneing at ", serverConfig);
});