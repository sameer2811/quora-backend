const mongoDb = require('mongoose');
async function connectToDataBase() {

    let url = "";
    if (process.env.PROJECT_RUNNING_MODE === "dev_mode") {
        url = process.env.QUORA_BACKEND_DATABASE_URL_DEV_MODE;
    } else {

    }
    await mongoDb.connect(url);
}

module.exports = {
    connectToDataBase
}