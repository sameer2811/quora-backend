const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    commentDesc: {
        type: String,
        required: [true, "Comment Desc is Required"]
    },
    commentId: {
        type: String,
        required: [true, "Comment Id is required!"]
    },
    userId: {
        type: String,
        required: [true, "userId is required!"]
    },
    answerId: {
        type: String,
        required: [true, "answerId is required!"]
    },
    likeUsersId: {
        type: [String]
    },
    dislikeUsersId: {
        type: [String]
    }

});

const CommentsSchema = mongoose.model("Comments-Schema", Schema);
module.exports = CommentsSchema;