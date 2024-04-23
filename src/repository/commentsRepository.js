const {
    CommentsSchema,
    AnswerSchema,
    UserProfileSchema
} = require('./../models')
const {
    v4: uuidv4
} = require('uuid');

const BadRequest = require('./../error/badRequest.error')
class CommentsRepository {

    async commentOnComment(existingCommentId, userId, text) {
        try {
            let userExists = await UserProfileSchema.find({
                userId: userId
            });

            if (userExists == null || userExists == undefined || userExists.length <= 0) {
                throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
            }

            let commentIdExists = await CommentsSchema.find({
                commentId: existingCommentId
            });

            if (commentIdExists == null || commentIdExists == undefined || commentIdExists.length <= 0) {
                throw new BadRequest("Invalid Comment Id Passed ", "Please check whether the Comment id that you are trying to pass is even valid or not");
            }
            const commentId = uuidv4();
            const response = await CommentsSchema.create({
                answerId: existingCommentId,
                userId: userId,
                commentId: commentId,
                commentDesc: text
            })
            return response;
        } catch (error) {
            console.log("Some issue occured at the commentOnComent of  CommentsRepository.js ", error);
            throw error;
        }
    }

    async commentOnAnswer(answerId, userId, text) {
        try {
            let userExists = await UserProfileSchema.find({
                userId: userId
            });

            if (userExists == null || userExists == undefined || userExists.length <= 0) {
                throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
            }

            let answerIdExists = await AnswerSchema.find({
                answerId: answerId
            });

            if (answerIdExists == null || answerIdExists == undefined || answerIdExists.length <= 0) {
                throw new BadRequest("Invalid Answer Id Passed ", "Please check whether the Answer id that you are trying to pass is even valid or not");
            }
            const commentId = uuidv4();
            const response = await CommentsSchema.create({
                answerId: answerId,
                userId: userId,
                commentId: commentId,
                commentDesc: text
            })
            return response;
        } catch (error) {
            console.log("Some issue occured at the commentOnAnswer of  CommentsRepository.js ", error);
            throw error;
        }
    }

    async likeAComment(userId, commentId) {
        let userExists = await UserProfileSchema.find({
            userId: userId
        });

        if (userExists == null || userExists == undefined || userExists.length <= 0) {
            throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
        }

        let commentIdExists = await CommentsSchema.find({
            commentId: commentId
        });

        if (commentIdExists == null || commentIdExists == undefined || commentIdExists.length <= 0) {
            throw new BadRequest("Invalid Answer Id Passed ", "Please check whether the comment id that you are trying to pass is even valid or not");
        }

        let res = await CommentsSchema.find({
            commentId: commentId,
            likeUsersId: {
                $in: [userId]
            }
        });

        console.log("response of the query is ", res);
        if (res.length > 0) {
            throw new BadRequest("Bad-Request", "You are already  liked this comment");
        }

        let likeResp = await CommentsSchema.updateOne({
            commentId: commentId
        }, {
            $push: {
                likeUsersId: userId
            }
        });
        return likeResp;
    }

}

module.exports = CommentsRepository;