const answerRouter = require('./answerApi');
const topicRouter = require('./topicApi');

module.exports = {
    userRouter: require('./userApi'),
    questionRouter: require('./questionApi'),
    answerRouter: require('./answerApi'),
    commentRouter: require('./commentsApi'),
    topicRouter: require('./topicApi')
}