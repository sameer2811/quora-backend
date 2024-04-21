const answerRouter = require('./answerApi');

module.exports = {
    userRouter: require('./userApi'),
    questionRouter: require('./questionApi'),
    answerRouter: require('./answerApi'),
    commentRouter: require('./commentsApi')
}