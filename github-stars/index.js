require("dotenv").config();
const express = require("express");

const app = express();

app.get("/github-stars", (req, res) => {
  res.send({
    message: "Total Github stars are going to expose soon!",
  });
});

app.get("/github-stars/:repo/stars", (req, res) => {
  res.send({
    message: "Total Github Stars of this repo is going to expose soon!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
