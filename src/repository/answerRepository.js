const {
    AnswerSchema
} = require('./../models');
const {
    v4: uuidv4
} = require('uuid');
class AnswerRepository {

    async updateAnswerToQuestion(answerId, newAnswerText) {
        try {
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