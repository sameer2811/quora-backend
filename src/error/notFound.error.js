const {
    StatusCodes
} = require("http-status-codes");

const BaseError = require('./BaseError');

class NotFoundError extends BaseError {
    constructor(msgDescription, msgDetails) {
        super("NOT_FOUND_ERROR", StatusCodes.NOT_FOUND, msgDescription, msgDetails);
    }
}

module.exports = NotFoundError