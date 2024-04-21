const {
    StatusCodes
} = require("http-status-codes");
const BaseError = require('./BaseError');

class IntenalServerError extends BaseError {
    constructor(msgDesciption, msgDetails) {
        super("Internal-Server-Error ", StatusCodes.INTERNAL_SERVER_ERROR, msgDesciption, msgDetails);
    }
}

module.exports = IntenalServerError;