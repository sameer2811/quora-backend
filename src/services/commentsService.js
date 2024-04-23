class CommentService {
    constructor(commentRepo) {
        this.commentRepo = commentRepo;
    }

    async commentOnComment(answerId, userId, text) {
        try {
            const response = await this.commentRepo.commentOnComment(answerId, userId, text);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async commentOnAnswer(answerId, userId, text) {
        try {
            const response = await this.commentRepo.commentOnAnswer(answerId, userId, text);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async likeAComment(userId, commentId) {
        try {
            const data = await this.commentRepo.likeAComment(userId, commentId);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CommentService;