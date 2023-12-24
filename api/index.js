const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./models/User");

const url = "localhost:4000/test";
dotenv.config();
mongoose.connect("mongodb+srv://emirchatadmin:5jc7LPBQ9Mfdo9OJ@cluster0.3zkmgoz.mongodb.net/chat-app?retryWrites=true&w=majority");
const jwtSecret = process.env.JWT_SECRET;

mongoose.connection.on("connected", () => {
  console.log("Connecté à MongoDB");
});

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

app.get("/test", (req, res) => {
  res.json({
    ok: true,
    msg: "Ca marche",
  });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
    jwt.sign({userId:createdUser._id}, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json({
        id: createdUser._id,
      });
    });
  } catch (err) {
    if (err) throw err;
    res.status(500).json('Erreur serveur');
  }
});

console.log("Serveur node en ligne! ", url);

// emirchatadmin
// 5jc7LPBQ9Mfdo9OJ


app.listen(4000);




  // const { username, password } = req.body; 
  // if (!username || !password) {
  //   throw new Error("Veuillez renseigner un nom d'utilisateur et un mot de passe");
  // }
  // const existingUser = await User.findOne({ username });
  // if (existingUser) {
  //   throw new Error(`L'utilisateur ${username} existe déjà`);
  // }

  
  // const createdUser = await User.create({ password, username });
  // console.log(createdUser);
  // return res.json({ ok: true });