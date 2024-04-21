class BaseError extends Error {
    constructor(errorName, statusCode, msgDescription, msgDetails) {
        super(msgDescription);
        this.errorName = errorName;
        this.statusCode = statusCode;
        this.msgDescription = msgDescription;
        this.msgDetails = msgDetails
    }
}

module.exports = BaseError;