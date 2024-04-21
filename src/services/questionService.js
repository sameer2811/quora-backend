class QuestionService {
    constructor(questionRepo) {
        this.questionRepo = questionRepo;
    }

    async postNewQuestion(questionData) {
        try {
            const data = await this.questionRepo.postNewQuestion(questionData);
            return data;
        } catch (error) {
            console.log("There is some issue occured in the postNewQuestion of questionService.js ", error);
            throw error
        }
    }

    async fetchQuestionsData(questionData) {
        try {
            const data = await this.questionRepo.fetchQuestionsData(questionData);
            return data;
        } catch (error) {
            console.log("There is some issue occured in the fetchQuestionsData of questionService.js ", error);
            throw error
        }
    }
}


module.exports = QuestionService;