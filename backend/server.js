const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const wordRoutes = require("./routes/words"); // ルートをインポート

const app = express();

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// 環境変数からMongoDB接続URIを取得
const mongoURI = process.env.MONGO_URI;

// MongoDBに接続
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// スキーマとモデルの定義
// 基本的なルート
// app.get("/api/test", (req, res) => {
//   res.json({ message: "Backend is working!" });
// });

// エンドポイントを設定
app.use("/api/words", wordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${5000}`);
});
