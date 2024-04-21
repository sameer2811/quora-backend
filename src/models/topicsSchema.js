const mongoose = require('mongoose');

const schema = mongoose.Schema({
    topic: {
        type: String,
        required: [true, "Please provide the topic"]
    }
});

const TopicSchema = mongoose.model("Topics-Schema", schema);
module.exports = TopicSchema;