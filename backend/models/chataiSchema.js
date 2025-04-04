const mongoose = require("mongoose");

const chataiSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

export const Question = mongoose.model("Question", chataiSchema);
export default Question; 