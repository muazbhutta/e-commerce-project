const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const { Connection } = require("mongoose");
const app = express();

// database connection
connect();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to new billi bazaar!" });
});

const port = env.port || 5000;

app.listen(port, () => {
  console.log(`your server is running on port: ${port}`);
});
