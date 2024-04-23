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
        if (!(req.body.hasOwnProperty("userId") && req.body.hasOwnProperty("text"))) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described two arguments are passed with the exact same name or not --> userId , text");
        }
        let userId = req.body.userId;
        let text = req.body.text;
        let answerId = req.params.id;

        const response = await commentService.commentOnComment(answerId, userId, text);
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "SuccessFully commented on comment!!!"
        });
    } catch (error) {
        next(error);
    }
}

async function commentOnAnswer(req, res, next) {
    try {
        if (!(req.body.hasOwnProperty("userId") && req.body.hasOwnProperty("text"))) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described two arguments are passed with the exact same name or not --> userId , text");
        }
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

async function likeAComment(req, res, next) {
    try {
        if (!req.body.hasOwnProperty("userId")) {
            throw new BadRequest("Required arguments Not passed", "check whether all the described  arguments are passed with the exact same name or not --> userId");
        }
        const commentId = req.params.id;
        const userId = req.body.userId;
        const response = await commentService.likeAComment(userId, commentId);
        return res.status(StatusCodes.CREATED).json({
            sucess: true,
            response: response,
            msgDetails: "Your like has been Succesfully created in comments"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    commentOnAnswer,
    commentOnComment,
    likeAComment
}