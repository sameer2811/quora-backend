const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    UserName: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    userId: {
        type: String,
        required: [true, 'Invalid User Id Generated.']
    },
    bio: String,
    likes: Number,
    followers: [String],
    following: [String]
});


const UserProfileSchema = mongoose.model("User-Profile-Schema", schema);

module.exports = UserProfileSchema;