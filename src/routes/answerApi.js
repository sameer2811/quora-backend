const express = require('express');
const {
    AnswerController,
    CommentController
} = require('./../controller');

const answerRouter = express.Router();

answerRouter.put('/:id', AnswerController.updateAnswerToQuestion);

answerRouter.post('/:id/comments', CommentController.commentOnAnswer)

answerRouter.post('/:id/likes', AnswerController.likeAnAnswer);

module.exports = answerRouter;