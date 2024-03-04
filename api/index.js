const express = require("express");
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://loc");
};

const app = express();

app.listen(3000, () => {
  console.log(`Server running at Port 3000!!`);
});
