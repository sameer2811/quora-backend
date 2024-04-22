const express = require('express');
const {
    TopicController
} = require('../controller/');
const topicRouter = express.Router();

topicRouter.get('/', TopicController.getAllTopics);
topicRouter.post('/', TopicController.createNewTopic)

module.exports = topicRouter;