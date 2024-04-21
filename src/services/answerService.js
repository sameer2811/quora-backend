class AnswerService {
    constructor(answerRepo) {
        this.answerRepo = answerRepo;
    }

    async updateAnswerToQuestion(answerId, updatedAnswerText) {
        try {
            const data = await this.answerRepo.updateAnswerToQuestion(answerId, updatedAnswerText);
            return data;
        } catch (error) {
            console.log("Certain error has occured at the updateAnswerToQuestion questionService.js");
            throw error;
        }
    }

    async postAnswerToQuestion(userId , questionId, answerText) {
        try {
            const data = await this.answerRepo.postAnswerToQuestion(userId , questionId, answerText);
            return data;
        } catch (error) {
            console.log("Certain error has occured at the postAnswerToQuestion questionService.js");
            throw error;
        }
    }
}

module.exports = AnswerService;