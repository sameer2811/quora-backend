const {
    AnswerSchema,
    UserProfileSchema,
    QuestionSchema
} = require('./../models');
const {
    v4: uuidv4
} = require('uuid');

const BadRequest = require('./../error/badRequest.error');
class AnswerRepository {

    async updateAnswerToQuestion(answerId, newAnswerText) {
        try {
            // check wether this answerId even exists or not
            const exists = await AnswerSchema.find({
                answerId: answerId
            });

            if (exists == null || exists == undefined || exists.length <= 0) {
                throw new BadRequest("Invalid answerId passed ", " please provide the correct answerId");
            }
            const response = await AnswerSchema.findOneAndUpdate({
                answerId: answerId,
            }, {
                $set: {
                    description: newAnswerText
                }
            }, {
                new: true
            });
            return response;
        } catch (error) {
            console.log("Ceratin issue has arised at the updateAnswerToQuestion of answerRespository.js ", error);
            throw error;
        }
    }

    async postAnswerToQuestion(userId, questionId, answerText) {
        try {
            let answerId = uuidv4();
            // check whether the userId is valid or not and same goes for question id as well
            let userExists = await UserProfileSchema.find({
                userId: userId
            });

            if (userExists == null || userExists == undefined || userExists.length <= 0) {
                throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
            }

            let questionExists = await QuestionSchema.find({
                questionId: questionId
            });

            if (questionExists == null || questionExists == undefined || questionExists.length <= 0) {
                throw new BadRequest("Invalid Question Id Passed ", "Please check whether the question id that you are trying to pass is even valid or not");
            }
            const response = await AnswerSchema.create({
                questionId: questionId,
                answerId: answerId,
                description: answerText,
                userId: userId
            });
            return response;
        } catch (error) {
            console.log("Ceratin issue has arised at the updateAnswerToQuestion of answerRespository.js ", error);
            throw error;
        }
    }
}

module.exports = AnswerRepository;