const mongoose = require("mongoose");

// User schema
const ToDoSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    // Array of up to 7 to-do lists per user
    tasks: {
        type: [Object],
        required: true,
    },
});

// Export User model
module.exports = mongoose.model("ToDo", ToDoSchema);
