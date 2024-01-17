const express = require("express");

const app = express();

app.use(express.json());

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidenyID = req.headers.kidenyID;

//   if (username != "vashu" && password != "passs") {
//     res.status(400).json({ msg: "something up with your inputs" });
//     return;
//   }

//   if (kidenyID != 1 || kidenyID != 2) {
//     res.status(400).json({ msg: "something up with your inputs" });
//     return;
//   }

//   res.json({
//     msg: "your kideny is fine",
//   });
// });

// app.listen(3000);

app.post("/heath-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidenyLength = kidneys.length;

  res.send("you have" + kidenyLength + "kidneys");
});

app.listen(3000);
