const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

const url = "localhost:4000/test";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
console.log("mongoURL", process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get("/test", (req, res) => {
  res.json({
    ok: true,
    msg: "Ca marche",
  });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.create({ username, password });
  jwt.sign({ userId: createdUser._id }, jwtSecret, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json({ ok });
  });
});
console.log("Serveur node en ligne! ", url);
// emirchatadmin
// 5jc7LPBQ9Mfdo9OJ
app.listen(4000);
