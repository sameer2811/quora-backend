const BaseError = require('./error/BaseError');

function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            errName: err.errorName,
            errDescription: err.msgDescription,
            details: err.msgDetails
        })
    }

    return res.status(404).json({
        success: false,
        errName: "Invalid Request",
        errDescription: "Not able to find data particular due to certain issue",
        details: err
    });
}

module.exports = {
    errorHandler
};