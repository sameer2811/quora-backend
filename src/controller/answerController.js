const {
    AnswerService
} = require('./../services');
const {
    AnswerRepository
} = require('./../repository');
const {
    StatusCodes
} = require('http-status-codes');
const BadRequest = require('./../error/badRequest.error');

const answerService = new AnswerService(new AnswerRepository());
async function answerToQuestion(req, res, next) {
    try {
        if (!(req.body.hasOwnProperty("userId") && req.body.hasOwnProperty("text"))) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described two arguments are passed with the exact same name or not --> userId , text");
        }
        const questionId = req.params.id;
        const userId = req.body.userId;
        const answerText = req.body.text;
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
        if (!req.body.hasOwnProperty("text")) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described  arguments text is passed with the exact same name or not ---> text");
        }
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

async function likeAnAnswer(req, res, next) {
    try {
        if (!req.body.hasOwnProperty("userId")) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described  arguments are passed with the exact same name or not --> userId");
        }
        const answerId = req.params.id;
        const userId = req.body.userId;
        const response = await answerService.likeAnAnswer(userId, answerId);
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "Your like has been Succesfully created in answer"
        });
    } catch (error) {
        console.log("Some error has occured at the answerToQuestion of answerController.js", error);
        next(error);
    }
}


module.exports = {
    answerToQuestion,
    updateAnswerToQuestion,
    likeAnAnswer
}