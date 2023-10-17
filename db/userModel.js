const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // email field
  email: {
    type: String,
    required: true,
    unique: true,
  },

  //   password field
  password: {
    type: String,
    required: true,
    unique: false,
  },

  // name field
  name: {
    type: String,
    required: true,
    unique: false,
  },

  // username field
  username: {
    type: String,
    required: true,
    unique: true,
  },

  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
