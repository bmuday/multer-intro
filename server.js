const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// EJS configuration
app.set("view engine", "ejs");

// Static assets
app.use(express.static("./public"));

// Middlewares

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
