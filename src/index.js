const {
    serverConfig,
    dbConfig
} = require('./config');

const {
    userRouter,
    questionRouter,
    answerRouter,
    commentRouter
} = require('./routes');

const {
    errorHandler
} = require('./util')

const bodyParser = require('body-parser');


// Importing the required express
const express = require('express');

// Initialization of the server
const server = express();

// declaring of usage of body- parser json
server.use(bodyParser.json());
server.use(bodyParser.text());
server.use(bodyParser.urlencoded({
    extended: true
}));

// Setup of API Routes
server.get("/", function (req, res) {
    console.log("Server has recieved your request at / url");
    return res.json({
        "sucess": true,
        "msg": "server listening at / route"
    })
});

server.use("/users", userRouter);
server.use("/questions", questionRouter);
server.use("/answers", answerRouter);
server.use("/comments", commentRouter);
server.use(errorHandler);

// Listen Method for the server
server.listen(serverConfig.PORT, async function () {
    console.log("Server started Listeneing at ", serverConfig);
    await dbConfig.connectToDataBase();
    console.log("You have been connected to database successfully");
});
