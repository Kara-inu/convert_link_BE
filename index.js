const express = require("express"); // ใช้งาน module express
const app = express(); // สร้างตัวแปร app เป็น instance ของ express
const path = require("path"); // เรียกใช้งาน path module
const createError = require("http-errors"); // เรียกใช้งาน http-errors module
const port = 3000; // port
const cors = require("cors"); // แก้ไขเรื่อง cors policy

user = 'test_app1'
pass = 'gMhO1X3xn8dO6ny8'
const url =
  `mongodb+srv://${user}:${pass}@cluster0.fetdtku.mongodb.net`;
const dbName = "assignment"; // กำหนดชื่อฐานข้อมูลที่จะใช้งาน
const dbOpt = "?retryWrites=true&w=majority";

const apiRouter = require("./controllers/api");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use("/api", apiRouter);



mongoose.set("strictQuery", true);
mongoose.connect(`${url}/${dbName}${dbOpt}`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully", dbName);
});


app.listen(port, function () {
  console.log(`API listening on port ${port}!`);
});

module.exports = app;
