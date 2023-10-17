const mongoose = require("mongoose");

// User schema
const NoteListSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    lists: {
        type: Object,
        required: true,
    },
}, {
    minimize: false,
});

// Export User model
module.exports = mongoose.model("Notes", NoteListSchema);
