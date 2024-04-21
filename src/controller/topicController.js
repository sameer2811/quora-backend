const {
    TopicsService
} = require('./../services');
const {
    TopicsRepository
} = require('./../repository');
const {
    StatusCodes
} = require('http-status-codes');

const topicService = new TopicsService(new TopicsRepository());

async function getAllTopics(req, res, next) {
    try {
        const response = await topicService.getAllTopics();
        return res.status(StatusCodes.OK).json({
            success: true,
            response: response,
            msgDetails: "Here is the list of all the Topics"
        })
    } catch (error) {
        next(error);
    }
}

async function createNewTopic(req, res, next) {
    try {
        let text = req.body.text;
        const response = await topicService.createNewTopic(text);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            response: response,
            msgDetails: "New Topic has been created!"
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTopics,
    createNewTopic
}