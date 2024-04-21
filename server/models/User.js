const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  googleId: {
    type: String,
    require: true,
  },
  displayName: {
    type: String,
    require: true,
  },

  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  profileImage: {
    type: String,
    require: true,
  },
  emails: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
