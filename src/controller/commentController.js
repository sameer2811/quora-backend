const {
    CommentService
} = require('./../services');
const {
    CommentsRepository
} = require('./../repository');
const BadRequest = require('../error/badRequest.error');
const {
    StatusCodes
} = require('http-status-codes');

const commentService = new CommentService(new CommentsRepository());
async function commentOnComment(req, res, next) {
    try {
        let userId = req.body.userId;
        let text = req.body.text;
        let answerId = req.params.id;

        const response = await commentService.commentOnComment(answerId, userId, text);
        if (response == null || response == undefined || response == []) {
            return new BadRequest("Something-Went-Wrong", "Can you please check you are commenting on the correct answer and have some description on it and authenticated as well");
        }
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "SuccessFully commented on commented!!!"
        });
    } catch (error) {
        next(error);
    }
}

async function commentOnAnswer(req, res, next) {
    try {
        let userId = req.body.userId;
        let text = req.body.text;
        let answerId = req.params.id;

        const response = await commentService.commentOnAnswer(answerId, userId, text);
        if (response == null || response == undefined || response == []) {
            return new BadRequest("Something-Went-Wrong", "Can you please check you are commenting on the correct answer and have some description on it and authenticated as well");
        }
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "SuccessFully commented on Answer!!!"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    commentOnAnswer,
    commentOnComment
}