const bodyParser = require("body-parser");
const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World you!");
});
app.post("/conversations", (req, res) => {
  // console.log(req.header);
  console.log(req.body);
  res.send("Hello World you!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
