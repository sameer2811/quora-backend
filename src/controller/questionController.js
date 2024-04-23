const {
    QuestionService
} = require('./../services')
const {
    QuestionRepository
} = require('./../repository');
const {
    StatusCodes
} = require('http-status-codes');
const BadRequest = require('./../error/badRequest.error')

const questionService = new QuestionService(new QuestionRepository());
async function postNewQuestionController(req, res, next) {
    try {
        let questionRequiredData = req.body;
        if (!(questionRequiredData.hasOwnProperty("userId") && questionRequiredData.hasOwnProperty("title") && questionRequiredData.hasOwnProperty("body"))) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described three arguments are passed with the exact same name or not --> userId , title , body");
        }

        const response = await questionService.postNewQuestion(questionRequiredData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfuly Posted new question from your side!!!",
            response: response
        });
    } catch (error) {
        console.log("Certain error has occured at the postNewQuestionController ", error);
        next(error);
    }
}

async function getQuestionsDataController(req, res, next) {
    try {
        let questionRequiredData = req.query;
        const response = await questionService.fetchQuestionsData(questionRequiredData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Here is the matches from our side of your query",
            response: response
        });
    } catch (error) {
        console.log("Certain error has occured at the getQuestionsDataController ", error);
        next(error);
    }
}

async function likeAQuestion(req, res, next) {
    try {
        if (!req.body.hasOwnProperty("userId")) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described  arguments are passed with the exact same name or not --> userId");
        }
        const questionId = req.params.id;
        const userId = req.body.userId;
        const response = await questionService.likeAQuestion(userId, questionId);
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "Your like has been Succesfully created in Question"
        });
    } catch (error) {
        next(error);
    }
}


module.exports = {
    postNewQuestionController,
    getQuestionsDataController,
    likeAQuestion
}
