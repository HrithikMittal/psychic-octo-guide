require("dotenv").config();
const express = require("express");

const app = express();

app.get("/github-repos", (req, res) => {
  res.send({
    message: "Total Github repos are going to expose soon!",
  });
});

app.get("/github-repos/:repo/repos", (req, res) => {
  res.send({
    message: "Total Github repos of this repo is going to expose soon!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT ${process.env.PORT}`);
});
