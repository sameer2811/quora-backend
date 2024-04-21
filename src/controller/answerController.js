const {
    AnswerService
} = require('./../services');
const {
    AnswerRepository
} = require('./../repository');
const {
    StatusCodes
} = require('http-status-codes');

const answerService = new AnswerService(new AnswerRepository());
async function answerToQuestion(req, res, next) {
    try {
        const questionId = req.params.id;
        const userId = req.body.userId;
        const answerText = req.body.text;
        console.log(a);
        console.log(" Printing the answerToQuestion of the id ", questionId, userId, answerText);
        const response = await answerService.postAnswerToQuestion(userId, questionId, answerText);
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "Your answer has been Succesfully posted"
        });
    } catch (error) {
        console.log("Some error has occured at the answerToQuestion of answerController.js", error);
        next(error);
    }
}

async function updateAnswerToQuestion(req, res, next) {
    try {
        const answerId = req.params.id;
        const updatedAnswerText = req.body.text;
        console.log(" Printing the updateAnswer to Question of the id ", answerId, updatedAnswerText);
        const response = await answerService.updateAnswerToQuestion(answerId, updatedAnswerText);
        return res.status(StatusCodes.OK).json({
            sucess: true,
            response: response,
            msgDetails: "Your answer has been Succesfully updated"
        })

    } catch (error) {
        console.log("Some error has occured at the updateAnswerToQuestion of answerController.js", error);
        next(error);
    }
}


module.exports = {
    answerToQuestion,
    updateAnswerToQuestion
}