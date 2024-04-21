const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    description: {
        type: String,
        required: [true, "Its neccessary to provide the description of the answer"]
    },
    answerId: {
        type: String,
        required: [true, "Its Necessay to provide the answerId of the answer"]
    },
    questionId: {
        type: String,
        required: [true, "Please provide the question id of the Question you are trying to answer to"]
    },
    userId : {
        type : String,
        required: [true , "Please provide the User id!"]
    },
    likeUsersId: {
        type: [String]
    },
    dislikeUsersId: {
        type: [String]
    }
});

const AnswerSchema = mongoose.model("answer-schema", Schema);
module.exports = AnswerSchema;