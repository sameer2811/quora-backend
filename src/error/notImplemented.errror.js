const {
    StatusCodes
} = require("http-status-codes");

const BaseError = require('./BaseError');

class NotImplementedError extends BaseError {

    constructor(msgDescription, msgDetails) {
        super("Not-Implemented-Error", StatusCodes.NOT_IMPLEMENTED, msgDescription, msgDetails);
    }

}

module.exports = NotImplementedError;