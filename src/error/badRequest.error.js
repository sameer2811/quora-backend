const {
    StatusCodes
} = require("http-status-codes");
const BaseError = require("./BaseError");

class BadRequest extends BaseError {
    constructor(msgDescription, msgDetails) {
        super("Bad-Request", StatusCodes.BAD_REQUEST, msgDescription, msgDetails);
    }
}

module.exports = BadRequest;