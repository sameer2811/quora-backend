const {
    CommentController
} = require('./../controller');

const express = require('express');
const commentRouter = express.Router();

commentRouter.post('/:id/comments', CommentController.commentOnComment);

commentRouter.post('/:id/likes', CommentController.likeAComment);

module.exports = commentRouter;
