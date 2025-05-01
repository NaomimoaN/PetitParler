const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

// GETリクエストを処理するルート
router.get("/", async (req, res) => {
  try {
    const words = await Word.find();
    console.log("Found words:", words);
    res.json(words);
  } catch (err) {
    console.error("Error fetching words:", err);
    res.status(500).json({ message: err.message });
  }
});

// POSTリクエストを処理するルート
router.post("/", async (req, res) => {
  try {
    console.log("Received POST request body:", req.body);

    const newWord = new Word({
      french: req.body.french,
      english: req.body.english,
      unit: req.body.unit,
      level: req.body.level,
      type: req.body.type,
      example: req.body.example,
      exampleTranslation: req.body.exampleTranslation,
      pronunciation: req.body.pronunciation,
      audio: req.body.audio,
      image: req.body.image,
    });

    console.log("New word object:", newWord);

    const savedWord = await newWord.save();
    console.log("Saved word:", savedWord);

    res.status(201).json(savedWord);
  } catch (error) {
    console.error("Error saving word:", error);
    res.status(400).json({
      message: error.message,
      details: error.errors,
    });
  }
});

module.exports = router;

// 正しい流れを整理すると：
// Schemaを定義:

// 1. Mongoose Schemaでデータの構造を作る:

// これは正しいです。Mongoose.Schema を使って、データのフィールド（例: french, english）や型（例: String）、制約（例: required: true）を定義します。

// 2. データをデータベースから読み込むとき、書き込む時このSchemaを通る:

// これも正しいです。Schema は、データの構造を検証する役割を果たします。
// データベースから取得したデータが、この Schema に従った形で返されます。

// 3. 取得した後、Mongooseモデルを使ってデータを操作する:
// これは正しいです。Mongoose モデルは、Schema を基にしたデータ操作のためのインターフェースを提供します。
// モデルは、データベースのコレクションに対する CRUD 操作を行うためのメソッドを提供します。
// モデルを使ってデータベースとやり取りする。
// 例: Word.find() でデータを取得。
// 例: Word.create() でデータを保存。
// クライアントにデータを返す:

// モデルを使って取得したデータを、APIのレスポンスとしてクライアントに返す。
