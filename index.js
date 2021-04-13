require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Hello World, Are we enemy!",
  });
});

app.get("/hello-world", (req, res) => {
  res.send({
    message: "Successfully ! Cleared 1st step and a lot more are there!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
