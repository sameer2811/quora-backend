const {
    QuestionSchema
} = require('./../models/');
const {v4 : uuidv4} = require('uuid');

class QuestionRepository {
    async postNewQuestion(questionData) {
        try {
            let title = questionData.title;
            let body = questionData.body;
            let userId = questionData.userId;
            let topicTags = questionData.hasOwnProperty('topicTags') ? questionData.topicTags : [];
            let questionId = uuidv4();
            let response = await QuestionSchema.create({
                userId: userId,
                title: title,
                description: body,
                body: body,
                topicTags: topicTags,
                questionId: questionId
            });
            return response;
        } catch (error) {
            console.log("Some error occured at QuestionRepo.js ", error);
            throw error;
        }
    }

    async fetchQuestionsData(questionsData) {
        try {
            const text = questionsData.hasOwnProperty("text") ? questionsData.text : "";
            const tag = questionsData.hasOwnProperty("tag") ? questionsData.tag : "";
            console.log("text and tag is ", text, tag);
            let query = {};
            if (text || tag) { // Check if either text or tag is not empty
                query.$or = [];
                if (text) {
                    query.$or.push({
                        body: text
                    });
                }
                if (tag) {
                    query.$or.push({
                        topicTags: tag
                    });
                }
            }
            const result = await QuestionSchema.find(query);
            return result;
        } catch (error) {
            console.log("Some error occured at QuestionRepo.js ", error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;