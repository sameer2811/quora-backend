const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Your user Id is necessary to post the question. Please provide it"]
    },
    title: {
        type: String,
        required: [true, "Please provide the Title of the question. Its Required"]
    },
    body: {
        type: String,
        required: [true, "Please Provide the description of the question. Its required"]
    },
    topicTags: {
        type: [String],
    },
    questionId: {
        type: String,
        required: [true, "provide the question id for this. Its Required!"]
    },
    likeUsersId: {
        type: [String]
    },
    dislikeUsersId: {
        type: [String]
    }

})

const questionSchema = mongoose.model("question-schema", schema);

module.exports = questionSchema;