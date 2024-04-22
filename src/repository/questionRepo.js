const {
    QuestionSchema,
    UserProfileSchema
} = require('./../models/');

const {
    v4: uuidv4
} = require('uuid');

const BadRequest = require('./../error/badRequest.error');

class QuestionRepository {
    async postNewQuestion(questionData) {
        try {
            let userId = questionData.userId;
            // first checking whether this userId even Exists in our database or not
            let userExists = await UserProfileSchema.find({
                userId: userId
            });

            if (userExists == null || userExists == undefined || userExists.length <= 0) {
                throw new BadRequest("Invalid User Id Passed ", "Please check whether the user id that you are trying to pass is even valid or not");
            }

            let title = questionData.title;
            let body = questionData.body;
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