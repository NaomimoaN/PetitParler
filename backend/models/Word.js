const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
  {
    french: { type: String, required: true },
    english: { type: String, required: true },
    unit: { type: String, enum: ["Unit1", "Unit2", "Unit3"] },
    level: { type: String, enum: ["A1", "A2", "B1", "B2"] },
    type: { type: String, enum: ["noun", "verb", "adjective"] },
    example: { type: String },
    exampleTranslation: { type: String },
    pronunciation: { type: String },
    audio: { type: String },
    image: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Word", wordSchema);
