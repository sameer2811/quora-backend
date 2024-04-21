const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    UserName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    userId : {
        type : String,
        require : true
    },
    bio: String,
    likes: Number,
    followers: [String],
    following: [String]
});


const UserProfileSchema = mongoose.model("User-Profile-Schema", schema);

module.exports = UserProfileSchema;