const exp = require("constants");
const express = require("express");
const app = express();

var users = [
  {
    name: "vashu",
    kidneys: [
      {
        healty: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidneys;
  const numberOfkidneys = johnkidneys.length;
  let numberOfHealtykidneys = 0;
  for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
      numberOfHealtykidneys = numberOfHealtykidneys + 1;
    }
  }
  const numberOfUnHealtykidneys = numberOfkidneys - numberOfHealtykidneys;
  res.json({
    johnkidneys,
    numberOfHealtykidneys,
    numberOfUnHealtykidneys,
  });
});

app.post("/", function (req, res) {
  // var user = req.body;
  const isHealty = req.body.isHealty;
  users[0].kidneys.push[
    {
      healthy: isHealty,
    }
  ];
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healty = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  if (isThereATleastOneUnhealtykidney()) {
    const newkidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healty) {
        newkidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newkidneys;
    res.json({ msg: "Done" });
  } else {
    res.sendStatus(411).json({
      msg: "you have no bad kidenys my friend",
    });
  }
});

function isThereATleastOneUnhealtykidney() {
  let atleastOneUnhealtyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healty) {
      atleastOneUnhealtyKidney = true;
    }
  }
  return atleastOneUnhealtyKidney;
}
app.listen(3000);
