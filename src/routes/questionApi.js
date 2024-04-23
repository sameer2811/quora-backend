const {
    QuestionController,
    AnswerController
} = require('./../controller');
const express = require('express');

const questionRouter = express.Router();

questionRouter.get('/search', QuestionController.getQuestionsDataController);

questionRouter.post('/', QuestionController.postNewQuestionController);

questionRouter.post('/:id/answers', AnswerController.answerToQuestion);

questionRouter.post('/:id/likes', QuestionController.likeAQuestion);

module.exports = questionRouter;