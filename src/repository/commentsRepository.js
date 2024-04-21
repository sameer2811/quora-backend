const {
    CommentsSchema
} = require('./../models')
const {
    v4: uuidv4
} = require('uuid');
class CommentsRepository {

    async commentOnComment(answerId, userId, text) {
        try {
            // check whether the answerId and userId even exists or not
            const commentId = uuidv4();
            const response = await CommentsSchema.create({
                answerId: answerId,
                userId: userId,
                commentId: commentId,
                commentDesc: text
            })
            return response;
        } catch (error) {
            console.log("Some issue occured at the commentOnComent of  CommentsRepository.js");
            throw error;
        }
    }

    async commentOnAnswer(answerId, userId, text) {
        try {
            // check whether the answerId and userId even exists or not
            const commentId = uuidv4();
            const response = await CommentsSchema.create({
                answerId: answerId,
                userId: userId,
                commentId: commentId,
                commentDesc: text
            })
            return response;
        } catch (error) {
            console.log("Some issue occured at the commentOnAnswer of  CommentsRepository.js");
            throw error;
        }
    }
}

module.exports = CommentsRepository;