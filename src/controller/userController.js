async function createNewUserId(req, res, next) {
    try {
        return res.json({
            "msg": "Server is running at createNewUserId"
        });
    } catch (error) {
        // TODO: define your error middleWare in the end
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        return res.json({
            "msg": "Server is running at updateUser"
        });
    } catch (error) {
        next(error)
    }
}

async function getUserDetails(req, res, next) {
    console.log("Hitting the url with the ----> ", req.params)
    try {
        return res.json({
            "msg": "Server is running at getUserDetails"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNewUserId,
    updateUser,
    getUserDetails
}
