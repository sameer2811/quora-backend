const express = require('express');
const {AnswerController} = require('./../controller');
const answerRouter = express.Router();

answerRouter.put('/:id', AnswerController.updateAnswerToQuestion);
// answerRouter


module.exports = answerRouter;