const {
    QuestionController,
    AnswerController
} = require('./../controller');
const express = require('express');

const questionRouter = express.Router();

questionRouter.get('/search', QuestionController.getQuestionsDataController);

questionRouter.post('/', QuestionController.postNewQuestionController);

questionRouter.get('/:id/answers', AnswerController.answerToQuestion);
module.exports = questionRouter;