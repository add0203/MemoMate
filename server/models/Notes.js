const { create } = require("connect-mongo");
const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const noteModel = mongoose.model("Notes", NoteSchema);

module.exports = noteModel;
